import { ICloudinary } from '../../../@types/generated/contentful'
import dtrOptions, { NodeProps, summaryOptions } from './'

jest.mock('./handleEmbedded/', () => () => 'handleEmbedded')
jest.mock('./handleSummary/', () => () => 'handleSummary')
jest.mock('./handleParagraph/', () => () => 'handleParagraph')

const node: NodeProps = {
  nodeType: 'type',
  data: {
    target: {} as ICloudinary,
  },
  content: [],
}

const span = <span>children</span>

describe('Cloudinary parser options', () => {
  describe('Main parser', () => {
    it('Renders properly', () => {
      expect(dtrOptions.renderNode['embedded-entry-block'](node)).toBe(
        'handleEmbedded'
      )
      expect(dtrOptions.renderNode.paragraph(node, span)).toBe(
        'handleParagraph'
      )
      expect(
        dtrOptions.renderNode['heading-1'](node, span).props.children.props
          .children
      ).toBe('children')
      expect(
        dtrOptions.renderNode['heading-2'](node, span).props.children.props
          .children
      ).toBe('children')
      expect(
        dtrOptions.renderNode['heading-3'](node, span).props.children.props
          .children
      ).toBe('children')
      expect(
        dtrOptions.renderNode['heading-4'](node, span).props.children.props
          .children
      ).toBe('children')
      expect(
        dtrOptions.renderNode['heading-5'](node, span).props.children.props
          .children
      ).toBe('children')
    })
  })

  describe('Summary parser', () => {
    it('Renders summary options properly', () => {
      const fn = summaryOptions({ slug: 'slug', type: 'type' })
      expect(fn.renderNode['list-item'](node)).toBe('handleSummary')
    })
    it('Renders summary options properly w/o type', () => {
      const fn = summaryOptions({ slug: 'slug' })
      expect(fn.renderNode['list-item'](node)).toBe('handleSummary')
    })
  })
})
