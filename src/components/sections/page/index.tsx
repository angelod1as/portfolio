import Text from './text'
import Projects from './project'
import theme from '@styles/theme'
import { IProject } from 'src/@types/generated/contentful'

interface PageProps {
  content: {
    fields: {
      type: string
      content: IProject
    }
  }
}

export default function Page({ content }: PageProps) {
  const { type } = content.fields
  const textualContent = content.fields.content

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  if (type === 'text') {
    return <Text content={textualContent} color={color} />
  }
  return <Projects content={textualContent} />
}
