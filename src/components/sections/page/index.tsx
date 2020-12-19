import Text from './text'
import Projects from './project'
import theme from '@styles/theme'
import Header from '@components/atoms/Header'

interface PageProps {
  content: {
    fields: {
      type: string
      content: {
        fields: {
          excerpt: string
          title: string
          slug: string
        }
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
