import { Content, Grid, Sidebar } from './styles'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import dtrOptions from '@components/utils/documentToReactComponentsOptions'
import Button from '@components/atoms/Button'

export interface ContentFieldsProps {
  excerpt?: string
  title: string
  slug: string
  content: Document
  safeDate: string
  live?: string
  repository?: string
}

interface TextProps {
  backgroundColor: string
  content: {
    fields: {
      content: Document
      safeDate: string
      description: string
      live: string
      repository: string
    }
  }
}

export default function Text({ backgroundColor, content }: TextProps) {
  const htmlContent = content.fields.content
  const { safeDate, description, live, repository } = content.fields

  // REFACTOR: colors should transition between them, nice effect
  const contentReact = documentToReactComponents(htmlContent, dtrOptions)

  return (
    <Grid backgroundColor={backgroundColor}>
      <Sidebar>
        {live && (
          <Button backgroundColor={backgroundColor} href={live}>
            Visit the project's website
          </Button>
        )}
        {repository && (
          <Button
            backgroundColor={backgroundColor}
            href={repository}
            icon="github"
          >
            Explore the repository
          </Button>
        )}
        <p>{description}</p>
        <p>Published on {safeDate}</p>
      </Sidebar>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
