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
  items?: Array<{
    fields: IProject['fields'] & {
      safeDate: string
    }
  }>
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

  const rendered = () => {
    if (type === 'projects') {
      return <Projects items={props.items} />
    } else {
      return <Text content={content} type={type} />
    }
  }

  return (
    <Wrapper>
      <Header {...{ title, excerpt, slug, type, hasIDo }} />
      {rendered()}
    </Wrapper>
  )
}
