import { Subscribe } from '#components/common/Subscribe'
import { Metadata, FCC } from '#types/types'
import { useColorContext } from '../../templates/Providers/ColorProvider'
import { BlogList } from './BlogList'
import { NewsletterFeed } from './NewsletterFeed'

export type PostProps = Array<{
  metadata: Partial<Metadata>
  slug: string
}>

export type BlogProps = {
  posts: PostProps
  slug?: string
}

export const Blog: FCC<BlogProps> = ({ posts }) => {
  const { colors } = useColorContext()

  const Strong: FCC = props => (
    <strong {...props} className={colors.textColor} />
  )

  return (
    <>
      <h1>
        I'm angelo and I do <span className={colors.textColor}>blogging</span>
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
      <Subscribe blog />
      <NewsletterFeed />
      <BlogList posts={posts} />
    </>
  )
}
