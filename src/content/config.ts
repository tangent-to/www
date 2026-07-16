import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    // Pin a post as the homepage feature. If any post sets this, the most
    // recent featured one wins; otherwise the homepage shows the latest post.
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    // Additional fields for better project display
    image: z.string().optional(),
    // Curated prominence: lower sorts first. Projects without a value fall
    // back to date order. Lets positioning reflect what the work is, not
    // when it was last touched.
    featured: z.number().optional(),
    // Hero image on the project detail page. Falls back to `image` when
    // omitted; set `hero: ""` to explicitly show no hero image.
    hero: z.string().optional(),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects };
