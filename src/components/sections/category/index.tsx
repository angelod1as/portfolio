import Text from './text'
import Projects from './project'
import theme from '@styles/theme'

interface CategoryProp {
  id: string
  order: number
  title: string
  type: string
}

export default function Category({ content }: { content: CategoryProp }) {
  const { type } = content

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  if (type === 'text') {
    return <Text content={content} color={color} />
  }
  return <Projects content={content} />
}
