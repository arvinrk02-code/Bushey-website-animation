# Bushey ASC — website

A modern rebuild of [busheyasc.org](https://www.busheyasc.org/) for the club's centenary year.
Static site built with [Astro](https://astro.build) and Tailwind CSS — fast, free to host, and
easy to maintain.

## Quick start

Requires Node 22+.

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/pages/` (file-based routing) |
| Editable content — news, squads, fixtures, results, records, locations, coaches, Athlete Hub | `src/content/` |
| Design system (colours, type, motion) | `src/styles/global.css` |
| Shared components (heroes, nav, squad pathway, water effects) | `src/components/` |
| Site-wide settings and navigation | `src/data/site.ts` |
| Future CMS schemas + setup guide | `cms/` |

## Editing content

Day-to-day updates don't require touching any page code:

- **Add a news post**: copy any file in `src/content/news/`, change the frontmatter and text.
- **Update fixtures/results**: edit `src/content/fixtures.json` / `src/content/results.json`.
- **Change the timetable**: edit `sessions` in the relevant `src/content/squads/*.md` file —
  the timetable page, squad pages and homepage all update from that single source.

See `cms/README.md` for the plan to move this into a Sanity studio for the committee.

## Deploying

The site is fully static (`dist/` after build). Deploy free on Netlify or Vercel; the join-form
uses Netlify Forms (`data-netlify` attribute) and works automatically on Netlify. On other hosts,
swap the form to Formspree.

## Before launch checklist

- Replace placeholder coach bios (`src/content/coaches.json`) and committee details
- Verify club records (`src/content/records.json`) — currently placeholders for the centenary records project
- Real photography of Bushey swimmers (biggest single visual upgrade available)
- Confirm fees/trials copy on `/join`
- Point the busheyasc.org domain at the new host
