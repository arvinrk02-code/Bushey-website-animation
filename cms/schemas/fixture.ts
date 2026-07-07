import { defineField, defineType } from "sanity";

export const fixture = defineType({
  name: "fixture",
  title: "Fixture",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Event name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "venue", title: "Venue", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: { list: ["Internal", "League", "Open meet", "County", "Regional"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "squadsInvited",
      title: "Who's invited",
      type: "string",
      description: "e.g. 'Challenge, Competitive, Performance' or 'Team selected by coaches'.",
      validation: (r) => r.required(),
    }),
    defineField({ name: "entryDeadline", title: "Entry deadline", type: "string" }),
    defineField({ name: "note", title: "Note", type: "text", rows: 2 }),
  ],
  orderings: [{ title: "Date, soonest first", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
});
