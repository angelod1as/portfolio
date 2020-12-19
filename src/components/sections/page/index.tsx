import Text, { ContentFieldsProps } from './text'
import Projects from './projects'
import theme from '@styles/theme'
import Header from '@components/atoms/Header'
import { IProject } from 'src/@types/generated/contentful'

import { Wrapper } from './styles'

export interface PageProps {
  content: {
    fields: {
      type: string
      hasido: boolean
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
    hasido: hasIDo,
    content: {
      fields: { title, excerpt, slug },
    },
  } = props.content.fields

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  const rendered = () => {
    if (type === 'projects') {
      return <Projects backgroundColor={color} items={props.items} />
    } else {
      return <Text content={content} backgroundColor={color} />
    }
  }

  return (
    <Wrapper>
      <Header
        backgroundColor={color}
        {...{ title, excerpt, slug, type, hasIDo }}
      />
      {rendered()}
    </Wrapper>
  )
}
