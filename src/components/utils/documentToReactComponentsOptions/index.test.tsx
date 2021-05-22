import dtrOptions, { NodeProps } from './'

jest.mock('@components/atoms/InlineEmbed', () => () => <div>InlineEmbed</div>)

describe('Cloudinary parser options', () => {
  describe('Titles parser', () => {
    const span = <span>children</span>
    const node = {} as NodeProps

    it('Renders h1 properly', () => {
      const fn = dtrOptions.renderNode['heading-1'](node, span).props.children
        .props.children
      expect(fn).toBe('children')
    })
    it('Renders h2 properly', () => {
      const fn = dtrOptions.renderNode['heading-2'](node, span).props.children
        .props.children
      expect(fn).toBe('children')
    })
    it('Renders h3 properly', () => {
      const fn = dtrOptions.renderNode['heading-3'](node, span).props.children
        .props.children
      expect(fn).toBe('children')
    })
    it('Renders h4 properly', () => {
      const fn = dtrOptions.renderNode['heading-4'](node, span).props.children
        .props.children
      expect(fn).toBe('children')
    })
    it('Renders h5 properly', () => {
      const fn = dtrOptions.renderNode['heading-5'](node, span).props.children
        .props.children
      expect(fn).toBe('children')
    })
  })
})
