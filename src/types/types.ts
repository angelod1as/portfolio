import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// Blog Post
export type BlogPostMetadata = {
  title: string
  color: string
  createdAt: number
}

// MDX

export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, React.ReactNode>
  lazy?: boolean
}
