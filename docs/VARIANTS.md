# Tailored variants and resumes

The site is one static page. A URL hash selects a tailored view:

    https://nicksjohnson.com/#afterquery

Two independent things can be tailored per slug (lowercase, alphanumerics only):

1. **Copy**, in `src/data/variants.ts`: title, focus line, headline, summary,
   per-role experience text, which projects are featured, skill order, contact
   blurb. Changing copy is a code change and needs a deploy.
2. **Resume PDF**, in the Netlify Blobs store `resumes`, uploaded with
   `npm run resumes -- add <Company>` (see `.claude/skills/add-resume/SKILL.md`).
   No deploy. Served by `netlify/functions/resumes.mts` at
   `/resumes/Nick_Johnson_Resume_<Company>.pdf`, listed at `/resumes/manifest.json`.

`src/lib/variant.tsx` reads the hash, remembers the slug in `sessionStorage` for
the tab, fetches the manifest once a slug is present, and exposes `useProfile()`:
base content merged with the copy variant, plus `resumeHref` (tailored PDF if one
exists, else `/Nick_Johnson_Resume.pdf`) and `preparedFor` (company name from
either source). Section anchors like `#projects` never change the selection.

If a hash matches neither a copy variant nor a stored resume, the visitor sees
the regular site and the regular resume.

Old resumes are pruned weekly by `netlify/functions/resumes-cleanup.mts`
(`RESUME_RETENTION_MONTHS`, default 3) and on every upload.
