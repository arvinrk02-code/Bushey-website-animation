import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "News post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Club news", "Gala report", "Centenary", "Announcement"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on the news list and homepage.",
      validation: (r) => r.required().max(220),
    }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [{ title: "Date, newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
