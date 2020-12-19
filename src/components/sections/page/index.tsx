import Text from './text'
import Projects from './projects'
import theme from '@styles/theme'
import Header from '@components/atoms/Header'
import { Document } from '@contentful/rich-text-types'

export interface ContentFieldsProps {
  excerpt: string
  title: string
  slug: string
  content: Document
}

interface PageProps {
  content: {
    fields: {
      type: string
      content: {
        fields: ContentFieldsProps
      }
    }
  }
}

export default function Page(props: PageProps) {
  const {
    content,
    type,
    content: {
      fields: { title, excerpt, slug },
    },
  } = props.content.fields

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <>
      <Header backgroundColor={color} {...{ title, excerpt, slug, type }} />
      {type === 'projects' ? (
        <Projects content={content} />
      ) : (
        <Text content={content} backgroundColor={color} />
      )}
    </>
  )
}
