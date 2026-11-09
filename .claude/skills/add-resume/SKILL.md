---
name: add-resume
description: Publish a tailored resume PDF to nicksjohnson.com without a deploy. Use when the user says "add resume", "upload the resume for <Company>", "new tailored resume", "put the <Company> resume on the site", "resume for #company", "list resumes", "remove the <Company> resume", "clean up old resumes", or "update the default resume". The PDF normally comes from ~/Downloads as Nick_Johnson_Resume_<Company>.pdf, produced by the "Resume and cover letter assistance" Claude conversation.
---

# Add resume

Tailored resumes live in the Netlify Blobs store `resumes`, served by `netlify/functions/resumes.mts` at `/resumes/<file>.pdf`. Uploading writes to Blobs directly, so there is no build or deploy. The site reads `/resumes/manifest.json` when the URL has a `#company` hash: if a resume exists for that slug, the hero shows "Prepared for <Company>" and the Download button serves it. Otherwise the site shows the regular content and `/Nick_Johnson_Resume.pdf` from `public/`.

All commands run from the repo root via `npm run resumes -- <command>`.

## Add a tailored resume

1. Work out the company from the request. Accept a company name ("AfterQuery"), a filename, or a path.
2. Run `npm run resumes -- add <Company>`. The script finds the newest matching `~/Downloads/Nick_Johnson_Resume_<Company>.pdf` (case-insensitive), uploads it under slug `<company>` (lowercase, alphanumerics only), and then prunes anything older than the retention window (default 3 months).
   - Multi-word names: the filename segment `Calendly_Web` becomes company "Calendly Web" and slug `calendlyweb`. Override the display name with `--company "Name"`.
   - If the file is somewhere else, pass the path: `npm run resumes -- add ~/Desktop/x.pdf --company "Name"`.
   - Skip the prune with `--no-cleanup`.
3. Run `npm run resumes -- verify <slug>` and confirm a 200 with `application/pdf`.
4. Report two links to the user: the site link `https://nicksjohnson.com/#<slug>` (what goes in the application) and the direct PDF link. Mention whether a copy variant for that slug exists in `src/data/variants.ts`; if not, the site shows the regular copy with the tailored resume, which is fine.

## Other commands

- `npm run resumes -- list` shows slug, company, upload date and age.
- `npm run resumes -- remove <slug>` deletes one.
- `npm run resumes -- cleanup --months 3 [--dry-run]` prunes by age. A scheduled function (`resumes-cleanup.mts`, weekly) does the same automatically using `RESUME_RETENTION_MONTHS`.
- `npm run resumes -- default` copies `~/Downloads/Nick_Johnson_Resume.pdf` to `public/Nick_Johnson_Resume.pdf`. That one is static, so tell the user it needs a commit and push to go live.

## If credentials are missing

The script exits with a message naming `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN`. Tell the user to copy `.env.local.example` to `.env.local` and fill in a personal access token (https://app.netlify.com/user/applications#personal-access-tokens) and the Project ID (Netlify > the site > Project configuration > General > Project details). Never print the token back, and never commit `.env.local`.

## Guardrails

- Never commit PDFs other than `public/Nick_Johnson_Resume.pdf`.
- Do not edit `src/data/variants.ts` as part of this skill unless the user asks for tailored copy as well as the resume.
- If the function returns 404 right after an upload, wait a few seconds and retry; Blobs is eventually consistent for reads at the edge.
