import { render, screen } from '@test/test-helper'
import dtrOptions from '../'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

jest.mock('@components/atoms/InlineEmbed', () => () => <div>InlineEmbed</div>)

describe('Cloudinary parser options', () => {
  describe('Renders paragraphs correctly', () => {
    it('Returns nothing when empty', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      expect(fn).toStrictEqual([])
    })

    it('Returns simple <p>', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Simple paragraph',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      expect(screen.getByText('Simple paragraph')).toBeInTheDocument()
    })

    it('Returns <p> with URL as <a> inside', () => {
      const htmlContent = {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Start of the paragraph ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'URL',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://www.foobar.com/',
            },
          },
        ],
        data: {},
      }

      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/Start of the paragraph/)
      const url = screen.getByText(/URL/)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toContainElement(url)
      expect(url).toHaveAttribute('href', 'https://www.foobar.com/')
    })

    it('Returns <p> with mailto URL as <a> inside', () => {
      const htmlContent = {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Start of the paragraph ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'URL',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'mailto:foo@bar.com',
            },
          },
        ],
        data: {},
      }

      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/Start of the paragraph/)
      const url = screen.getByText(/URL/)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toContainElement(url)
      expect(url).toHaveAttribute('href', 'mailto:foo@bar.com')
    })

    it('Returns <p> with internal link', () => {
      const htmlContent = {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Start of the paragraph ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'URL',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: '/zines',
            },
          },
        ],
        data: {},
      }

      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/Start of the paragraph/)
      const url = screen.getByText(/URL/)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toContainElement(url)
      expect(url).toHaveAttribute('href', '/zines')
    })

    it('Returns multiple formatted inline-embed', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {},
              },
              {
                nodeType: 'embedded-entry-inline',
                content: [],
                data: {
                  target: {
                    sys: {
                      id: '1hQdOEYX4QmwfcPo7AiIBK',
                    },
                    fields: {},
                  },
                },
              },
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {},
              },
              {
                nodeType: 'embedded-entry-inline',
                content: [],
                data: {
                  target: {
                    sys: {
                      id: '1hQdOEYX4QmwfcPo7AiIBK',
                    },
                    fields: {},
                  },
                },
              },
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
      }

      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getAllByText(/InlineEmbed/)
      expect(paragraph).toHaveLength(2)
    })

    it('Returns asset hyperlink', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'entry-hyperlink',
                content: [
                  {
                    nodeType: 'text',
                    value: 'hyperlink',
                    marks: [],
                    data: {},
                  },
                ],
                data: {
                  target: {
                    sys: {
                      id: '1hQdOEYX4QmwfcPo7AiIBK',
                    },
                    fields: {
                      slug: 'link-slug',
                      tags: [
                        {
                          fields: {
                            title: 'talking',
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        ],
      }

      const fn = documentToReactComponents(
        htmlContent as unknown as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/hyperlink/)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveAttribute('href', '/projects/link-slug')
    })

    it('Returns asset hyperlink with correct url if Tile', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'entry-hyperlink',
                content: [
                  {
                    nodeType: 'text',
                    value: 'hyperlink',
                    marks: [],
                    data: {},
                  },
                ],
                data: {
                  target: {
                    sys: {
                      id: '1hQdOEYX4QmwfcPo7AiIBK',
                    },
                    fields: {
                      slug: 'link-slug',
                      tags: [
                        {
                          fields: {
                            title: 'Tile content',
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        ],
      }

      const fn = documentToReactComponents(
        htmlContent as unknown as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/hyperlink/)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveAttribute('href', '/link-slug')
    })

    it('Renders code blocks correctly', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'code',
                marks: [
                  {
                    type: 'code',
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
        ],
      }

      const fn = documentToReactComponents(
        htmlContent as unknown as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/code/)
      expect(paragraph).toHaveAttribute('data-testid', 'code')
      expect(paragraph.parentElement).toHaveAttribute('data-testid', 'pre')
    })

    it('Renders inline code correctly', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Test code block',
                marks: [],
                data: {},
              },
              {
                nodeType: 'text',
                value: ' inline',
                marks: [
                  {
                    type: 'code',
                  },
                ],
                data: {},
              },
              {
                nodeType: 'text',
                value: ' test ',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
      }

      const fn = documentToReactComponents(
        htmlContent as unknown as Document,
        dtrOptions as Options
      )
      render(fn)
      const paragraph = screen.getByText(/inline/)
      expect(paragraph).toHaveAttribute('data-testid', 'code')
    })
  })
})
