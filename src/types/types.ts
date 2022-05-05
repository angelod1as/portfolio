import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// Blog Post
export type BlogPostMetadata = {
  title: string
  createdAt: number
  description: string
  draft?: boolean
}

// MDX

export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, React.ReactNode>
  lazy?: boolean
}
