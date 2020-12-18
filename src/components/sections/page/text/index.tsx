import { Content, Grid } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { IProject } from 'src/@types/generated/contentful'
import dtrOptions from '@components/utils/documentToReactComponentsOptions'

interface TextProps {
  color: string
  content: IProject
}

export default function Text({ color, content }: TextProps) {
  const htmlContent = content.fields.content
  // REFACTOR: colors should transition between them, nice effect
  const contentReact = documentToReactComponents(htmlContent, dtrOptions)

  return (
    <Grid>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
