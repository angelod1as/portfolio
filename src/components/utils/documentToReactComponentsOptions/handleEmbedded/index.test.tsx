import { render, screen } from '@test/test-helper'
import dtrOptions from '../'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

jest.mock('@components/atoms/Embed', () => () => <div>Embed</div>)
jest.mock('@components/atoms/Video', () => () => <div>Video</div>)

describe('Cloudinary parser options', () => {
  describe('Embeds & images', () => {
    it('Renders single image with caption', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  contentType: {
                    sys: {
                      id: 'cloudinary',
                    },
                  },
                },
                fields: {
                  contentful: [
                    {
                      url: 'http://www.foo.bar',
                    },
                  ],
                  altDescription: 'alt description',
                  caption: 'caption',
                  decorators: ['contain', 'test'],
                },
              },
            },
          },
        ],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const figure = screen.getByRole('figure')
      const img = screen.getByRole('img')
      const caption = screen.getByText(/caption/)
      expect(caption).toBeInTheDocument()
      expect(figure).toBeInTheDocument()
      expect(figure).toContainElement(img)
      expect(img).toHaveAttribute('src', 'http://www.foo.bar')
    })

    it('renders mosaic with caption', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  contentType: {
                    sys: {
                      id: 'cloudinary',
                    },
                  },
                },
                fields: {
                  contentful: [
                    {
                      url: 'http://www.foo.bar/1',
                    },
                    {
                      url: 'http://www.foo.bar/2',
                    },
                  ],
                  altDescription: 'alt description',
                  caption: 'caption',
                },
              },
            },
          },
        ],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      const figure = screen.getByRole('figure')
      const [img1, img2] = screen.getAllByRole('img')
      const caption = screen.getByText(/caption/)
      expect(caption).toBeInTheDocument()
      expect(figure).toBeInTheDocument()
      expect(figure).toContainElement(img1)
      expect(figure).toContainElement(img2)
      expect(img1).toHaveAttribute('src', 'http://www.foo.bar/1')
      expect(img2).toHaveAttribute('src', 'http://www.foo.bar/2')
    })

    it('renders embed', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'embed',
                    },
                  },
                },
                fields: {
                  title: 'embed',
                  embed: '<div>embed</div>',
                },
              },
            },
          },
        ],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      expect(screen.getByText('Embed')).toBeInTheDocument()
    })

    it('renders youtube embed', () => {
      const htmlContent = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'embed',
                    },
                  },
                },
                fields: {
                  title: 'embed',
                  youtubeId: '123',
                },
              },
            },
          },
        ],
      }
      const fn = documentToReactComponents(
        htmlContent as Document,
        dtrOptions as Options
      )
      render(fn)
      expect(screen.getByText('Video')).toBeInTheDocument()
    })
  })
})
