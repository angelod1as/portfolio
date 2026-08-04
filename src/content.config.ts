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

export const WHAT = [
  "coding",
  "architecture",
  "management",
  "mentoring",
  "design",
  "illustration",
  "journalism",
  "fiction",
  "scriptwriting",
  "editorial",
  "speaking",
  "audio",
] as const;

export const MEDIUM = [
  "web",
  "print",
  "comics",
  "video",
  "podcast",
  "music",
  "hardware",
] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.object({
        from: z.coerce.number().int(),
        to: z.coerce.number().int().optional(),
      }),
      type: z.enum(["personal", "professional"]),
      description: z.string(),
      what: z.array(z.enum(WHAT)).nonempty(),
      medium: z.array(z.enum(MEDIUM)).nonempty(),
      how: z.array(z.string()).optional(),
      live: z.string().url().optional(),
      thumb: z.object({
        src: image(),
        alt: z.string(),
      }),
      highlighted: z.number().int().min(0).optional(),
    }),
});

export const collections = { blog, projects };
