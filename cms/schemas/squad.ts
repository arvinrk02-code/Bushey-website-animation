import { defineField, defineType } from "sanity";

export const squad = defineType({
  name: "squad",
  title: "Squad",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Pathway position", type: "number", validation: (r) => r.required() }),
    defineField({
      name: "tag",
      title: "Stage",
      type: "string",
      options: { list: ["Foundation", "Development", "Competitive", "Performance", "Adult"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "strap", title: "One-line description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "ageGuide", title: "Typical ages", type: "string", validation: (r) => r.required() }),
    defineField({ name: "hoursPerWeek", title: "Water time per week", type: "string", validation: (r) => r.required() }),
    defineField({ name: "entry", title: "Entry criteria", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "focus", title: "What we work on", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "sessions",
      title: "Weekly sessions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day", type: "string" },
            { name: "start", title: "Start (HH:MM)", type: "string" },
            { name: "end", title: "End (HH:MM)", type: "string" },
            { name: "location", title: "Location", type: "string" },
            { name: "note", title: "Note (e.g. Invite only)", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "body", title: "Full description", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [{ title: "Pathway order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
