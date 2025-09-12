import { Metadata, FCC } from '#types/types'
import { BlogList } from './BlogList'

export type PostProps = Array<{
  metadata: Partial<Metadata>
  slug: string
}>

export type BlogProps = {
  posts: PostProps
  slug?: string
}

export const Blog: FCC<BlogProps> = ({ posts }) => {
  const Strong: FCC = props => <strong {...props} className="text-highlight" />

  return (
    <>
      <h1>
        I'm angelo and I do <span className="text-highlight">blogging</span>
      </h1>
      <div>
        <p>
          This space is very <Strong>personal</Strong>, with subjects that range
          from <Strong>technical</Strong> stuff to <Strong>individual</Strong>{' '}
          reflection.
        </p>
        <p>
          Read at your peril and <Strong>share abundantly</Strong>.
        </p>
      </div>
      {/* <Subscribe blog /> */}
      {/* <NewsletterFeed /> */}
      <BlogList posts={posts} />
    </>
  )
}
