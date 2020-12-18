import { BLOCKS } from '@contentful/rich-text-types'
import { ICloudinary } from 'src/@types/generated/contentful'

const handleEmbedded = (node: { data: { target: ICloudinary } }) => {
  console.log(
    'The following node is not rendered correctly because of some configuration issue:',
    node
  )
  const target = node?.data?.target
  if (
    target?.sys?.contentType?.sys?.id &&
    target.sys.contentType.sys.id === 'cloudinary'
  ) {
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
    [BLOCKS.EMBEDDED_ENTRY]: node => handleEmbedded(node),
  },
}

export default dtrOptions
