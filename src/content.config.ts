import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = { blog, projects };
