import { BlogPostMetadata } from '#types/types'
import { FC } from 'react'

export type PostProps = Array<{
  metadata: Partial<BlogPostMetadata>
  slug: string
}>

export type BlogProps = {
  posts: PostProps
}

export const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      posts:
      <ul>
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <a href={`/blog/${slug}`}>{metadata.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
