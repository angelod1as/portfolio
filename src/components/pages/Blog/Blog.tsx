import { Subscribe } from '#components/common/Subscribe'
import { Metadata, FCC } from '#types/types'
import { useState } from 'react'
import { useColorContext } from '../../templates/Providers/ColorProvider'
import { BlogItem } from './BlogItem'
import { Filter } from './Filter'

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
  const [order, setOrder] = useState<string>('descending')

  const handleOrder = (value: string) => {
    if (value) {
      setOrder(value)
    }
  }

  const blogPosts = posts.sort((a, b) => {
    if (!a.metadata.createdAt || !b.metadata.createdAt) {
      return 0
    }

    if (order === 'ascending') {
      return a.metadata.createdAt - b.metadata.createdAt
    } else {
      return b.metadata.createdAt - a.metadata.createdAt
    }
  })

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
      <Filter order={order} handleOrder={handleOrder} />
      <ul className="flex flex-col gap-16">
        {blogPosts.map(({ slug, metadata }) => {
          return <BlogItem key={slug} metadata={metadata} slug={slug} />
        })}
      </ul>
    </>
  )
}
