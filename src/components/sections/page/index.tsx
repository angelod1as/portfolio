import Text from './text'
import Projects from './project'
import theme from '@styles/theme'
import { IProject } from 'src/@types/generated/contentful'
import Header from '@components/atoms/Header'

interface PageProps {
  content: {
    fields: {
      type: string
      title: string
      content: IProject
    }
  }
}

export default function Page({
  content: {
    fields: { type, title, content },
  },
}: PageProps) {
  const excerpt = content?.fields?.excerpt
  const slug = content?.fields?.slug

  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <>
      <Header backgroundColor={color} {...{ title, excerpt, slug }} />
      {type === 'text' ? (
        <Text content={content} color={color} />
      ) : (
        <Projects content={content} />
      )}
    </>
  )
}
