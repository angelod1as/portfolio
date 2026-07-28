import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

// Every lane shares this base. Subject lives in tags, never in the lane name.
// `newsletter` is carried from day one but nothing reads it until the digest phase.
const entry = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  newsletter: z.enum(['include', 'standalone', 'skip']).default('include'),
  image: z.string().optional(),
})

const lane = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./content/${dir}` }),
    schema: entry,
  })

// Essays and notes are the same shape. Which one an entry belongs to is Angelo's
// judgement, per file — no rule decides it and none should be added.
const essays = lane('essays')
const notes = lane('notes')

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/work' }),
  schema: entry.extend({
    type: z.enum(['personal', 'professional']),
    summary: z.object({
      // The old content stores `when` as a list of epoch milliseconds.
      when: z.union([z.coerce.date(), z.array(z.coerce.date())]),
      where: z.string(),
      who: z.string(),
      what: z.string(),
      why: z.string(),
    }),
    live: z.string().optional(),
    hero: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
})

const library = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/library' }),
  schema: entry.extend({
    medium: z.enum(['book', 'series', 'film']),
    by: z.string(),
  }),
})

const recommendations = defineCollection({
  loader: file('./content/recommendations.yaml'),
  schema: z.object({
    kind: z.enum(['professional', 'personal']),
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    link: z.string().optional(),
    text: z.string(),
  }),
})

export const collections = { essays, notes, work, library, recommendations }
