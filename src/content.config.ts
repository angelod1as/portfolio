import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.object({
        from: z.coerce.number().int(),
        to: z.coerce.number().int().optional(),
      }),
      description: z.string(),
      what: z.array(z.string()),
      how: z.array(z.string()),
      thumb: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { blog, projects };
