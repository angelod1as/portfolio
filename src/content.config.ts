import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Every lane shares this base. Subject lives in tags, never in the lane name.
// `newsletter` is carried from day one but nothing reads it until the digest phase.
const entry = z.object({
  title: z.string(),
  date: z.coerce.date(),
  lang: z.enum(['en', 'pt']),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  newsletter: z.enum(['include', 'standalone', 'skip']).default('include'),
})

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/essays' }),
  schema: entry,
})

export const collections = { essays }
