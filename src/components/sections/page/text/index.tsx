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
  type: string
  content: {
    fields: ContentFieldsProps
  }
}

export default function Text({ content }: TextProps) {
  const htmlContent = content.fields.content
  const { safeDate, description, live, repository } = content.fields

  return (
    <Grid>
      <Sidebar>
        {live && <Button href={live}>Visit the project's website</Button>}
        {repository && (
          <Button href={repository} icon="github">
            Explore the repository
          </Button>
        )}
        {description !== '-tile' && (
          <>
            <p>{description}</p>
            <p>Published on {safeDate}</p>
          </>
        )}
      </Sidebar>
      <Content>{documentToReactComponents(htmlContent, dtrOptions)}</Content>
    </Grid>
  )
}
