import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// MDX
export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, JSX.Element>
  lazy?: boolean
}

export type DefaultMetadata = {
  title: string
  createdAt?: number
}

// Blog Post
export type BlogPostMetadata = DefaultMetadata & {
  description: string
  draft?: boolean
}
