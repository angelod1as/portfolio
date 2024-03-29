import { MDXProvider } from '@mdx-js/react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ComponentProps, FC, PropsWithChildren } from 'react'

// React

export type FCC<T = unknown> = FC<PropsWithChildren<T>>

// MDX
export type MDXProps = MDXRemoteSerializeResult & {
  components?: ComponentProps<typeof MDXProvider>['components']
  lazy?: boolean
}

export type Metadata = BlogMetadata & ProjectMetadata

export type BlogMetadata = {
  title: string
  createdAt: number | null
  color: string | null
  compiledTitle: string | null
  description: string | null
  draft: boolean | null
  timeToRead: number | null
  wordCount: number | null
  socialImagePath: string | null
  publishAt: number | null
  tags?: string[]
}

export type MDXReturn = {
  metadata: Metadata
  slug: string
  compiledSource: string
  directory: string
}

export type PageMetadata = {
  extension: 'mdx' | 'md'
  metadata: Metadata
  slug: string
  directory: string
  hasContent: boolean
}

// Portfolio

type Summary = {
  when: string | number | null
  ongoing: boolean | null
  where: string | null
  who: string | null
  what: string | null
  why: string | null
}

export type ProjectMetadata = {
  title: string
  description: string
  type: string
  compiledTitle: string | null
  summary: Summary | null
  compiledSummary?: (Omit<Summary, 'when'> & { when: string | null }) | null
  hero: {
    src: string
    alt: string
  } | null
  live: string | null
  categories?: string[]
}

// Forms

export type ErrorProps = {
  location?: string
  msg: string
  param?: string
  value?: string
}

export type PostResult = {
  errors?: ErrorProps[]
}
