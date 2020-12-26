import { BLOCKS } from '@contentful/rich-text-types'
import handleEmbedded from './handleEmbedded'
import handleSummary from './handleSummary'
import { ICloudinary } from '../../../@types/generated/contentful'
import handleParagraph from './handleParagraph'
import { ReactNode } from 'react'
import { H1, H2, H3, H4, H5 } from '@components/atoms/Typography'

export interface NodeProps {
  nodeType: string
  data: {
    target: ICloudinary
  }
  content: any[]
}

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: NodeProps) => {
      return handleEmbedded(node)
    },
    [BLOCKS.PARAGRAPH]: (node: NodeProps, children: ReactNode) => {
      return handleParagraph(node, children)
    },
    [BLOCKS.HEADING_1]: (_node: NodeProps, children: ReactNode) => (
      <H1>{children}</H1>
    ),
    [BLOCKS.HEADING_2]: (_node: NodeProps, children: ReactNode) => (
      <H2>{children}</H2>
    ),
    [BLOCKS.HEADING_3]: (_node: NodeProps, children: ReactNode) => (
      <H3>{children}</H3>
    ),
    [BLOCKS.HEADING_4]: (_node: NodeProps, children: ReactNode) => (
      <H4>{children}</H4>
    ),
    [BLOCKS.HEADING_5]: (_node: NodeProps, children: ReactNode) => (
      <H5>{children}</H5>
    ),
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
