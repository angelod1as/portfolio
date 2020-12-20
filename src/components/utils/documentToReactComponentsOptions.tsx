import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { ICloudinary } from 'src/@types/generated/contentful'

const handleEmbedded = (node: { data: { target: ICloudinary } }) => {
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

const handleSummary = (node, prefix) => {
  const compo = documentToReactComponents(node)

  const loopCompo = (currCompo, run) => {
    if (currCompo?.type === 'a') {
      if (currCompo?.props?.href) {
        console.log(currCompo.props.href)
        currCompo.props.href = `${prefix}${currCompo?.props?.href}`
      }
    } else {
      currCompo?.props?.children?.forEach(nextCompo => {
        loopCompo(nextCompo, run + 1)
      })
    }

    return currCompo
  }

  loopCompo(compo, 1)

  return compo
}

// TODO: transport video tags
// TODO: Make summary # links automatically
const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => handleEmbedded(node),
  },
}

export const summaryOptions = ({ slug, type = 'projects' }) => {
  const prefix = `/${type}/${slug}/`
  return {
    renderNode: {
      [BLOCKS.LIST_ITEM]: node => handleSummary(node, prefix),
    },
  }
}

export default dtrOptions
