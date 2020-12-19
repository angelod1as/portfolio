import Text from './text'
import Projects from './projects'
import theme from '@styles/theme'
import Header from '@components/atoms/Header'
import { Document } from '@contentful/rich-text-types'
import { IProject } from 'src/@types/generated/contentful'

import { Wrapper } from './styles'

export interface ContentFieldsProps {
  excerpt: string
  title: string
  slug: string
  content: Document
}

export interface PageProps {
  content: {
    fields: {
      type: string
      content: {
        fields: ContentFieldsProps
      }
    }
  }
  items?: IProject[]
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

  const rendered = () => {
    if (type === 'projects') {
      return <Projects items={props.items} />
    } else {
      return <Text content={content} backgroundColor={color} />
    }
  }

  return (
    <Wrapper>
      <Header backgroundColor={color} {...{ title, excerpt, slug, type }} />
      {rendered()}
    </Wrapper>
  )
}
