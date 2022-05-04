import { Link } from '#components/common/Links'
import { BlogPostMetadata } from '#types/types'
import { FC, useState } from 'react'
import { RandomColors } from 'src/helpers/colors'
import { Filter } from './Filter'

export type PostProps = Array<{
  metadata: Partial<BlogPostMetadata>
  slug: string
}>

export type BlogProps = {
  posts: PostProps
  colors: RandomColors
}

export const Blog: FC<BlogProps> = ({ posts, colors }) => {
  const [order, setOrder] = useState<string>('descending')

  const handleOrder = (value: string) => {
    if (value) {
      setOrder(value)
    }
  }

  const sortedPosts = posts.sort((a, b) => {
    if (!a.metadata.createdAt || !b.metadata.createdAt) {
      return 0
    }

    if (order === 'ascending') {
      return a.metadata.createdAt - b.metadata.createdAt
    } else {
      return b.metadata.createdAt - a.metadata.createdAt
    }
  })

  const Strong: FC = props => <strong {...props} className={colors.textColor} />
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
      <Filter order={order} handleOrder={handleOrder} />
      <ul>
        {sortedPosts.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link inner href={`/blog/${slug}`}>
              {metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
