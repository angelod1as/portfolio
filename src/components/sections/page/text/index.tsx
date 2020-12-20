import { Content, Grid, Sidebar } from './styles'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import dtrOptions from '@components/utils/documentToReactComponentsOptions'
import Button from '@components/atoms/Button'

export interface ContentFieldsProps {
  title: string
  description: string
  content: Document
  slug: string
  safeDate: string
  excerpt?: string
  live?: string
  repository?: string
  summary?: Document
}

interface TextProps {
  backgroundColor: string
  type: string
  content: {
    fields: ContentFieldsProps
  }
}

export default function Text({ backgroundColor, content }: TextProps) {
  const htmlContent = content.fields.content
  const { safeDate, description, live, repository } = content.fields

  // REFACTOR: colors should transition between them, nice effect

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
      <Content>{documentToReactComponents(htmlContent, dtrOptions)}</Content>
    </Grid>
  )
}
