import { Content, Grid } from './styles'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ITile } from 'src/@types/generated/contentful'

interface TextProps {
  color: string
  content: ITile
}

export default function Text({
  color,
  content: {
    fields: { title, content, cloudinary },
  },
}: TextProps) {
  // REFACTOR: colors should transition between them, nice effect

  const exportImageNode = (node) => {
    if (node && node.data && node.data.target && node.data.target.fields) {
      const { file } = node.data.target.fields
      if (file?.contentType.includes('image')) {
        let url = file.url
        // parsing cloudinary
        if (cloudinary) {
          const photoName = file.fileName.split('.')[0]
          const foundImage = cloudinary.find((item) => {
            const cloudNameSplit = item.public_id.split('/')
            const cloudName = cloudNameSplit[cloudNameSplit.length - 1]
            return cloudName === photoName
          })
          if (foundImage) {
            url = foundImage.url
          }
        }
        return <img src={url} alt={title} />
      }
    }
  }

  const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => exportImageNode(node),
    },
  }

  const contentReact = documentToReactComponents(content, dtrOptions)

  return (
    <Grid>
      <Content>{contentReact}</Content>
    </Grid>
  )
}
