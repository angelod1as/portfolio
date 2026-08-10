import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const pattern = "**/[^_]*.{md,mdx}";

const blog = defineCollection({
  loader: glob({
    pattern,
    base: "./content/blog",
    // Folders are YYYY/MM for organisation only; the public URL is flat.
    generateId: ({ entry }) =>
      entry
        .replace(/\.[^.]+$/, "")
        .replace(/^\d{4}\/\d{2}\//, "")
        .replace(/\/index$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    categories: z.array(z.string()).default([]),
    kind: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern, base: "./content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.object({
        from: z.coerce.number().int(),
        to: z.coerce.number().int().optional(),
      }),
      type: z.enum(["personal", "professional"]),
      description: z.string(),
      what: z.array(z.string()).nonempty(),
      medium: z.array(z.string()).nonempty(),
      how: z.array(z.string()).optional(),
      live: z.string().optional(),
      thumb: z.object({
        src: image(),
        alt: z.string(),
      }),
      highlighted: z.number().int().min(0).optional(),
    }),
});

const recommendations = defineCollection({
  loader: glob({ pattern, base: "./content/recommendations" }),
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    role: z.string(),
    company: z.string(),
    linkedin: z.string(),
    excerpt: z.string(),
    extra: z.string().optional(),
    highlighted: z.number().int().min(0).optional(),
  }),
});

export const collections = { blog, projects, recommendations };
