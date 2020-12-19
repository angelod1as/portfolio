import { Content, Grid } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import dtrOptions from '@components/utils/documentToReactComponentsOptions'
import { ContentFieldsProps } from '..'

interface TextProps {
  backgroundColor: string
  content: {
    fields: ContentFieldsProps
  }
}

export default function Text({ backgroundColor, content }: TextProps) {
  console.log(content)
  const htmlContent = content.fields.content

  // REFACTOR: colors should transition between them, nice effect
  const contentReact = documentToReactComponents(htmlContent, dtrOptions)

  return (
    <Grid backgroundColor={backgroundColor}>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
