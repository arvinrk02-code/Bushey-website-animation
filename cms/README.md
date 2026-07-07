# CMS setup (Sanity) — when you're ready

The site currently reads all content from plain files in `src/content/` (markdown and JSON),
which are deliberately structured so non-developers can edit them with minimal risk. When the
club is ready for a proper editing UI, this folder contains ready-made Sanity schemas for the
four content types committee members will update most often: **news, fixtures, results, squads**.

## Why this isn't wired up yet

Creating a Sanity project requires a (free) account owned by the club. Rather than tying the
codebase to a personal account, the schemas are prepared here so hookup is a one-hour job once
the club creates its own project.

## Hookup steps

1. Create a free project at [sanity.io](https://www.sanity.io/) using a club-owned email
   (free tier: 3 users, plenty for the committee).
2. Scaffold a studio: `npm create sanity@latest`, then replace the generated `schemaTypes`
   with the contents of `cms/schemas/`.
3. Migrate current content: the markdown/JSON in `src/content/` maps 1:1 to the schema fields.
4. In the Astro site, swap the `glob`/`file` loaders in `src/content.config.ts` for a Sanity
   loader (`@sanity/astro` or a custom `loader`), keeping the same Zod shapes so no page
   templates need to change.
5. Add a deploy webhook (Sanity → Netlify/Vercel) so publishing content rebuilds the site.

## Until then: editing content directly

Committee members with a GitHub login can edit content in the browser:

- **News**: add a markdown file to `src/content/news/` (copy an existing one).
- **Fixtures**: edit `src/content/fixtures.json`.
- **Results**: edit `src/content/results.json`.
- **Squads / timetable**: edit the files in `src/content/squads/` — the timetable page and
  squad pages are both generated from the `sessions` in each squad file.
- **Records**: edit `src/content/records.json`.
- **Locations**: edit `src/content/locations.json`.

Every change goes through a pull request, the site rebuilds automatically on merge, and nothing
can be permanently broken — every previous version is in git history.
