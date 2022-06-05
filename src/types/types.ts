import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, PropsWithChildren, ReactNode } from 'react'

// React

export type FCC<T = unknown> = FC<PropsWithChildren<T>>

// MDX
export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, ReactNode>
  lazy?: boolean
}

export type DefaultMetadata = {
  title: string
  createdAt?: number
  color?: string
  compiledTitle: string
}

// Blog Post
export type BlogPostMetadata = DefaultMetadata & {
  description: string
  draft?: boolean
  timeToRead: number
  wordCount: number
}
