import { BLOCKS, EntryLinkInline } from '@contentful/rich-text-types'
import handleEmbedded from './handleEmbedded'
import handleSummary from './handleSummary'
import { ICloudinary } from '../../../@types/generated/contentful'
import handleParagraph from './handleParagraph'
import { ReactNode } from 'react'

export interface NodeProps {
  nodeType: string
  data: {
    target: ICloudinary
  }
  content: any[]
}

// TODO: Make summary # links automatically
// TODO: Assure ALL <a>s are target blank
// TODO: Handle inline references and/or URLs (shots between fangs)
const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: NodeProps) => {
      return handleEmbedded(node)
    },
    [BLOCKS.PARAGRAPH]: (node: NodeProps, children: ReactNode) => {
      return handleParagraph(node, children)
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
