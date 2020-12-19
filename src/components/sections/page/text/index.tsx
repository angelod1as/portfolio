import { Content, Grid } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import dtrOptions from '@components/utils/documentToReactComponentsOptions'

interface TextProps {
  backgroundColor: string
  content: {
    fields: {
      content: Document
    }
  }
}

export default function Text({ backgroundColor, content }: TextProps) {
  const htmlContent = content.fields.content

  // let htmlContent = content
  // if (content?.fields?.content) {
  //   htmlContent = content.fields.content
  // }
  // REFACTOR: colors should transition between them, nice effect
  const contentReact = documentToReactComponents(htmlContent, dtrOptions)

  return (
    <Grid backgroundColor={backgroundColor}>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
