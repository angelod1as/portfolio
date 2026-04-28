import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      publishedAt: z.coerce.date().optional(),
      tags: z.array(z.string().min(1)).default([]),
      toc: z.boolean().optional(),
      ogImage: image().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      publishedAt: z.coerce.date().optional(),
      categories: z.array(z.string().min(1)).min(1),
      type: z.enum(['personal', 'professional', 'client']).optional(),
      // hero is { src, alt } because it's a rendered <img> — alt is required.
      // Compare with blog.ogImage above, which is a bare image() because it's
      // only used in <meta> tags where alt has no meaning.
      hero: z
        .object({
          src: image(),
          alt: z.string().min(1),
        })
        .optional(),
      live: z.string().url().startsWith('https://').optional(),
    }),
});

export const collections = { blog, projects };
