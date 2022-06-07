import { Link } from '#components/common/Links'
import { Subscribe } from '#components/common/Subscribe'
import { Metadata, FCC } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'
import { RandomColors } from 'src/helpers/colors'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { useColorContext } from '../../templates/Providers/ColorProvider'
import { Filter } from './Filter'

export type PostProps = Array<{
  metadata: Partial<Metadata>
  slug: string
}>

export type BlogProps = {
  posts: PostProps
  slug?: string
}

const generateTitle = (compiledTitle: string, colors: RandomColors) => {
  const text = colors.textColor ?? ''

  const titleComponents = {
    p: (props: JSX.IntrinsicElements['p']) => (
      <h2 {...props}>{props.children}</h2>
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className={`${text}`} />
    ),
  }

  return (
    <MDXRemote compiledSource={compiledTitle} components={titleComponents} />
  )
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
      <Subscribe inner />
      <Filter order={order} handleOrder={handleOrder} />
      <ul className="flex flex-col gap-16">
        {blogPosts.map(({ slug, metadata }) => {
          return (
            <li key={slug} className="relative pl-6">
              <div
                className={`absolute top-0 left-0 w-2 h-full ${colors.bgColor}`}
              />
              {metadata?.compiledTitle && (
                <Link inner href={`/blog/${slug}`}>
                  {generateTitle(metadata.compiledTitle, colors)}
                </Link>
              )}
              <p className="mb-0">
                {metadata.description ?? ''}
                {metadata.createdAt && (
                  <span className="ml-2">
                    <small className="opacity-80">
                      {TimestampToDate(metadata.createdAt)}
                    </small>
                  </span>
                )}
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
