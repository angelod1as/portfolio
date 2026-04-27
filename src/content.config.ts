import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      toc: z.boolean().optional(),
      ogImage: image().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date().optional(),
      categories: z.array(z.string()).min(1),
      type: z.enum(['personal', 'professional', 'client']).optional(),
      hero: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      live: z.string().url().optional(),
    }),
});

export const collections = { blog, projects };
