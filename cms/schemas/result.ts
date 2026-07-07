import { defineField, defineType } from "sanity";

export const result = defineType({
  name: "result",
  title: "Result / gala report",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Event name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "venue", title: "Venue", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullet points — new qualifying times, standout swims, PB rates.",
    }),
  ],
  orderings: [{ title: "Date, newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
