import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, PropsWithChildren, ReactNode } from 'react'

// React

export type FCC<T = unknown> = FC<PropsWithChildren<T>>

// MDX
export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, ReactNode>
  lazy?: boolean
}

export type Metadata = BlogMetadata & ProjectMetadata

export type BlogMetadata = {
  title: string
  createdAt?: number
  color?: string
  compiledTitle?: string
  description?: string
  draft?: boolean
  timeToRead?: number
  wordCount?: number
  socialImagePath?: string
  publishAt?: number
}

export type MDXReturn = {
  metadata: Metadata
  slug: string
  compiledSource: string
  directory: string
}

export type PageMetadata = {
  metadata: Metadata
  slug: string
  directory: string
}

// Portfolio

type Summary = {
  when?: number
  where?: string
  who?: string
  what?: string
  why?: string
}

export type ProjectMetadata = {
  title: string
  compiledTitle?: string
  summary?: Summary
  compiledSummary?: Omit<Summary, 'when'> & { when?: string }
  hero?: {
    src: string
    alt: string
  }
  live?: string
}
