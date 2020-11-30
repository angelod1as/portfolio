import Text from './text'
import Projects from './project'
import theme from '@styles/theme'
import { ITile } from 'src/@types/generated/contentful'

export default function Category({ content }: { content: ITile }) {
  const { type } = content.fields

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  if (type === 'text') {
    return <Text content={content} color={color} />
  }
  return <Projects content={content} />
}
