import { getStore } from "@netlify/blobs";
import type { Config } from "@netlify/functions";

/**
 * Weekly: delete tailored resumes older than RESUME_RETENTION_MONTHS (default 3).
 * The same logic runs locally via `npm run resumes -- cleanup`.
 */

const PREFIX = "tailored/";

export default async () => {
  const months = Number(process.env.RESUME_RETENTION_MONTHS ?? 3);
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - months);

  const store = getStore("resumes");
  const { blobs } = await store.list({ prefix: PREFIX });
  const removed: string[] = [];

  for (const b of blobs) {
    const res = await store.getMetadata(b.key);
    const uploadedAt = res?.metadata?.uploadedAt;
    const when = typeof uploadedAt === "string" ? new Date(uploadedAt) : null;
    // Entries without a parseable date are left alone rather than guessed at.
    if (when && !Number.isNaN(when.getTime()) && when < cutoff) {
      await store.delete(b.key);
      removed.push(b.key);
    }
  }

  console.log(
    `resumes-cleanup: retention ${months} months, checked ${blobs.length}, removed ${removed.length}` +
      (removed.length ? `: ${removed.join(", ")}` : ""),
  );
};

export const config: Config = {
  schedule: "@weekly",
};
