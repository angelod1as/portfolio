import { Content, Grid } from './styles'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ITile, ICloudinary, IProject } from 'src/@types/generated/contentful'

interface TextProps {
  color: string
  content: IProject
}

export default function Text({ color, content }: TextProps) {
  const htmlContent = content.fields.content
  // REFACTOR: colors should transition between them, nice effect
  const handleEmbedded = ({ data: { target } }: { data: { target: ICloudinary } }) => {
    if (target.sys.contentType.sys.id === 'cloudinary') {
      if (target.fields.contentful.length) {
        const url = target.fields.contentful[0].url
        const alt = target.fields.altDescription
        return (
          <figure>
            <img src={url} alt={alt} />
          </figure>
        )
      }
    }
    return <div data-error="content-type not configured for display"></div>
  }

  const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => handleEmbedded(node),
    },
  }

  const contentReact = documentToReactComponents(htmlContent, dtrOptions)

  return (
    <Grid>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
