import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const session = z.object({
  day: z.string(),
  start: z.string(),
  end: z.string(),
  location: z.string(),
  note: z.string().optional(),
});

const squads = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/squads" }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    tag: z.string(),
    strap: z.string(),
    ageGuide: z.string(),
    hoursPerWeek: z.string(),
    entry: z.array(z.string()),
    focus: z.array(z.string()),
    next: z.string().optional(),
    inviteOnly: z.boolean().default(false),
    sessions: z.array(session).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["Club news", "Gala report", "Centenary", "Announcement"]),
    excerpt: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    photosOnly: z.boolean().default(false),
    gallery: z.array(z.object({ src: z.string(), alt: z.string().optional() })).default([]),
  }),
});

const hub = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hub" }),
  schema: z.object({
    title: z.string(),
    strap: z.string(),
    order: z.number(),
    icon: z.string(),
    keyTakeaways: z.array(z.string()),
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

const coaches = defineCollection({
  loader: file("./src/content/coaches.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    group: z.enum(["Head Coach", "Coaches", "Teachers"]),
    photo: z.string().optional(),
  }),
});

const fixtures = defineCollection({
  loader: file("./src/content/fixtures.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    month: z.number().min(1).max(12),
    order: z.number().default(0),
    typicalTiming: z.string(),
    venue: z.string(),
    level: z.enum(["Internal", "League", "Open meet", "County", "Regional"]),
    squadsInvited: z.string(),
    note: z.string().optional(),
  }),
});

const results = defineCollection({
  loader: file("./src/content/results.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

const locations = defineCollection({
  loader: file("./src/content/locations.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    mapQuery: z.string(),
    length: z.string(),
    parking: z.string(),
    note: z.string().optional(),
    photo: z.string().optional(),
  }),
});

export const collections = { squads, news, hub, coaches, fixtures, results, locations };
