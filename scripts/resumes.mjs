#!/usr/bin/env node
/**
 * Manage tailored resume PDFs in the "resumes" Netlify Blobs store.
 * Writes go straight to Blobs, so nothing here triggers a deploy.
 *
 *   npm run resumes -- add AfterQuery              # ~/Downloads/Nick_Johnson_Resume_AfterQuery.pdf
 *   npm run resumes -- add ./path/to/file.pdf --company "Calendly Web"
 *   npm run resumes -- list
 *   npm run resumes -- remove afterquery
 *   npm run resumes -- cleanup [--months 3] [--dry-run]
 *   npm run resumes -- default                     # copy ~/Downloads/Nick_Johnson_Resume.pdf to public/ (needs a deploy)
 *   npm run resumes -- verify afterquery           # HEAD the live URL
 *
 * Needs NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN (see .env.local.example).
 */
import { getStore } from "@netlify/blobs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PREFIX = "tailored/";
const FILE_PREFIX = "Nick_Johnson_Resume";
const DOWNLOADS = process.env.RESUME_DOWNLOADS_DIR || path.join(os.homedir(), "Downloads");
const SITE_URL = (process.env.SITE_URL || "https://nicksjohnson.com").replace(/\/$/, "");

loadEnvLocal();

const [command, ...rest] = process.argv.slice(2);
const flags = parseFlags(rest);

const commands = { add, list, remove, cleanup, default: setDefault, verify };
if (!command || !commands[command]) {
  console.error(`Usage: resumes <${Object.keys(commands).join("|")}> [args]`);
  process.exit(1);
}
await commands[command](flags._, flags);

// ---------------------------------------------------------------------------

async function add([target], opts) {
  if (!target) fail("Usage: add <Company | path/to.pdf> [--company \"Display Name\"] [--no-cleanup]");

  const file = resolvePdf(target);
  const segment = segmentFromFile(file) || target;
  const company = opts.company || segment.replace(/_/g, " ").trim();
  const slug = slugify(segment);
  if (!slug) fail(`Could not derive a slug from "${segment}".`);

  const served = `${FILE_PREFIX}_${segment}.pdf`;
  const data = fs.readFileSync(file);
  const uploadedAt = new Date().toISOString();

  const store = openStore();
  await store.set(PREFIX + slug, data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength), {
    metadata: { company, file: served, uploadedAt, sourceFile: path.basename(file) },
  });

  console.log(`Uploaded ${path.basename(file)} (${(data.length / 1024).toFixed(0)} KB)`);
  console.log(`  slug:     ${slug}`);
  console.log(`  company:  ${company}`);
  console.log(`  site:     ${SITE_URL}/#${slug}`);
  console.log(`  pdf:      ${SITE_URL}/resumes/${served}`);

  if (opts.cleanup !== false) {
    await cleanup([], { months: opts.months, quiet: true });
  }
}

async function list() {
  const entries = await loadEntries(openStore());
  if (!entries.length) return console.log("No tailored resumes in the store.");
  const rows = entries
    .sort((a, b) => (b.uploadedAt ?? "").localeCompare(a.uploadedAt ?? ""))
    .map((e) => ({
      slug: e.slug,
      company: e.company ?? "",
      uploaded: e.uploadedAt ? e.uploadedAt.slice(0, 10) : "?",
      age: e.uploadedAt ? `${ageInDays(e.uploadedAt)}d` : "?",
      url: `${SITE_URL}/#${e.slug}`,
    }));
  console.table(rows);
}

async function remove([slugArg]) {
  if (!slugArg) fail("Usage: remove <slug>");
  const slug = slugify(slugArg);
  const store = openStore();
  const existing = await store.getMetadata(PREFIX + slug);
  if (!existing) fail(`No resume stored for "${slug}".`);
  await store.delete(PREFIX + slug);
  console.log(`Removed ${slug} (${existing.metadata?.company ?? "unknown company"}).`);
}

async function cleanup(_, opts) {
  const months = Number(opts.months ?? process.env.RESUME_RETENTION_MONTHS ?? 3);
  if (!Number.isFinite(months) || months <= 0) fail("--months must be a positive number");
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - months);

  const store = openStore();
  const entries = await loadEntries(store);
  const stale = entries.filter((e) => e.uploadedAt && new Date(e.uploadedAt) < cutoff);

  if (!stale.length) {
    if (!opts.quiet) console.log(`Cleanup: nothing older than ${months} months.`);
    return;
  }
  for (const e of stale) {
    if (opts["dry-run"]) {
      console.log(`[dry-run] would remove ${e.slug} (${e.company}, uploaded ${e.uploadedAt.slice(0, 10)})`);
    } else {
      await store.delete(PREFIX + e.slug);
      console.log(`Removed ${e.slug} (${e.company}, uploaded ${e.uploadedAt.slice(0, 10)})`);
    }
  }
}

async function setDefault([source]) {
  const from = source ? path.resolve(source) : path.join(DOWNLOADS, `${FILE_PREFIX}.pdf`);
  if (!fs.existsSync(from)) fail(`Not found: ${from}`);
  const to = path.join(ROOT, "public", `${FILE_PREFIX}.pdf`);
  fs.copyFileSync(from, to);
  console.log(`Copied ${from} -> public/${FILE_PREFIX}.pdf`);
  console.log("The default resume is a static file: commit and push to deploy it.");
}

async function verify([slugArg]) {
  const store = openStore();
  const target = slugArg ? PREFIX + slugify(slugArg) : null;
  const entries = target
    ? [await loadEntry(store, target)].filter(Boolean)
    : await loadEntries(store);
  if (!entries.length) fail("Nothing to verify.");
  for (const e of entries) {
    const url = `${SITE_URL}/resumes/${e.file}`;
    const res = await fetch(url, { method: "HEAD" }).catch(() => null);
    const status = res ? `${res.status} ${res.headers.get("content-type") ?? ""}`.trim() : "network error";
    console.log(`${status.padEnd(28)} ${url}`);
  }
}

// ---------------------------------------------------------------------------

function openStore() {
  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_AUTH_TOKEN;
  if (!siteID || !token) {
    fail(
      "Missing NETLIFY_SITE_ID or NETLIFY_AUTH_TOKEN.\n" +
        "  Copy .env.local.example to .env.local and fill both in.\n" +
        "  Token: https://app.netlify.com/user/applications#personal-access-tokens\n" +
        "  Site ID: Netlify > the site > Project configuration > General > Project details (Project ID).",
    );
  }
  return getStore({ name: "resumes", siteID, token });
}

async function loadEntries(store) {
  const { blobs } = await store.list({ prefix: PREFIX });
  const entries = await Promise.all(blobs.map((b) => loadEntry(store, b.key)));
  return entries.filter(Boolean);
}

async function loadEntry(store, key) {
  const res = await store.getMetadata(key);
  if (!res) return null;
  return { slug: key.slice(PREFIX.length), ...res.metadata };
}

function resolvePdf(target) {
  const direct = path.resolve(target);
  if (fs.existsSync(direct) && direct.toLowerCase().endsWith(".pdf")) return direct;

  const want = `${FILE_PREFIX}_${target}.pdf`.toLowerCase();
  const loose = slugify(target);
  const candidates = fs
    .readdirSync(DOWNLOADS)
    .filter((f) => f.toLowerCase().endsWith(".pdf") && f.toLowerCase().startsWith(`${FILE_PREFIX}_`.toLowerCase()))
    .filter((f) => f.toLowerCase() === want || slugify(segmentFromFile(f)) === loose)
    .map((f) => path.join(DOWNLOADS, f))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);

  if (!candidates.length) {
    fail(`No PDF matched "${target}". Looked for ${want} in ${DOWNLOADS}, or pass a path.`);
  }
  if (candidates.length > 1) {
    console.log(`Several matches, using newest: ${path.basename(candidates[0])}`);
  }
  return candidates[0];
}

function segmentFromFile(file) {
  const base = path.basename(file).replace(/\.pdf$/i, "");
  const re = new RegExp(`^${FILE_PREFIX}_?`, "i");
  return base.replace(re, "");
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function ageInDays(iso) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
}

function parseFlags(args) {
  const out = { _: [] };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith("--no-")) out[a.slice(5)] = false;
    else if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = args[i + 1];
      if (next !== undefined && !next.startsWith("--")) { out[key] = next; i++; }
      else out[key] = true;
    } else out._.push(a);
  }
  return out;
}

function loadEnvLocal() {
  const file = path.join(ROOT, ".env.local");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m || process.env[m[1]] !== undefined) continue;
    process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
  }
}

function fail(msg) {
  console.error(msg);
  process.exit(1);
}
