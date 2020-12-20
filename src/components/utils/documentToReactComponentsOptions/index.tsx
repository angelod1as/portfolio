import { BLOCKS } from '@contentful/rich-text-types'
import handleImage from './handleImage'
import handleSummary from './handleSummary'
import { ICloudinary } from '../../../@types/generated/contentful'
import handleCode from './handleCode'

interface NodeProps {
  nodeType: string
  data: {
    target: ICloudinary
  }
  content: any[]
}

// TODO: transport video tags
// TODO: Make summary # links automatically
// TODO: Embed content type
// TODO: Image decorators
const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: NodeProps) => {
      return handleImage(node)
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return handleCode(node, children)
    },
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
