import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

/**
 * Serves tailored resume PDFs from the "resumes" Netlify Blobs store so a new
 * resume never needs a deploy. Upload with `npm run resumes -- add <Company>`.
 *
 *   GET /resumes/manifest.json                       -> { resumes: { slug: meta } }
 *   GET /resumes/Nick_Johnson_Resume_AfterQuery.pdf  -> the PDF (also /resumes/afterquery.pdf)
 *
 * Blob key: tailored/<slug>. Metadata: { company, file, uploadedAt }.
 */

export const PREFIX = "tailored/";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function slugFromFile(file: string): string {
  return slugify(
    decodeURIComponent(file)
      .replace(/\.pdf$/i, "")
      .replace(/^nick_johnson_resume_?/i, ""),
  );
}

export default async (_req: Request, context: Context) => {
  const store = getStore("resumes");
  const file = context.params.file;

  if (!file || file === "manifest.json") {
    const { blobs } = await store.list({ prefix: PREFIX });
    const entries = await Promise.all(
      blobs.map(async (b) => [b.key.slice(PREFIX.length), await store.getMetadata(b.key)] as const),
    );
    const resumes: Record<string, unknown> = {};
    for (const [slug, res] of entries) {
      if (res?.metadata) resumes[slug] = res.metadata;
    }
    return Response.json(
      { resumes },
      { headers: { "Cache-Control": "public, max-age=300" } },
    );
  }

  const slug = slugFromFile(file);
  if (!slug) return new Response("Not found", { status: 404 });

  const res = await store.getWithMetadata(PREFIX + slug, { type: "stream" });
  if (!res) return new Response("Not found", { status: 404 });

  const name =
    typeof res.metadata?.file === "string"
      ? res.metadata.file
      : "Nick_Johnson_Resume.pdf";

  return new Response(res.data, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${name}"`,
      "Cache-Control": "public, max-age=300",
    },
  });
};

export const config: Config = {
  path: ["/resumes/manifest.json", "/resumes/:file"],
};
