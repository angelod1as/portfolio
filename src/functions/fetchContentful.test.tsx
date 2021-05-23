import fetchContentful, { sorter } from './fetchContentful'

const mockResponse = jest.fn()

jest.mock('contentful', () => ({
  createClient: () => ({
    getEntries: mockResponse,
    getEntry: jest.fn(),
  }),
}))

describe('Sorter function', () => {
  it('Sorts correctly', () => {
    const a = {
      fields: {
        date: '1970-01-01',
      },
    }
    const b = {
      fields: {
        date: '1970-01-02',
      },
    }
    const expected = 86400000 // 1970-01-02 timestamp
    expect(sorter(a, b)).toBe(expected)
  })
})

describe('Fetch and parse data from Contentful', () => {
  describe('The function returns expected information...', () => {
    it('...when nothing is queried', async () => {
      const response = await fetchContentful({})
      expect(response).toStrictEqual({ content: [], items: [] })
    })

    it('...when paragraph & embedded-entry-inline', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'embedded-entry-inline',
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: 1,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'project' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when paragraph & not embedded-entry-inline', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'foobar',
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: 1,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'tile' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when embedded-entry-block', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: [
                    {
                      nodeType: 'embedded-entry-block',
                      data: {
                        target: {
                          sys: {
                            id: 1,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'tile' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when ID is undefined and embedded-entry-block', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: [
                    {
                      nodeType: 'embedded-entry-block',
                      data: {
                        target: {
                          sys: {
                            id: undefined,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'tile' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when content is undefined', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: undefined,
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'tile' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when nodeType is other', async () => {
      const implementation = [
        {
          fields: {
            content: {
              fields: {
                content: {
                  content: [
                    {
                      nodeType: 'other',
                      data: {
                        target: {
                          sys: {
                            id: 1,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ]

      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ type: 'tile' })
      expect(response).toStrictEqual({
        content: implementation,
        items: [],
      })
    })

    it('...when tag is present', async () => {
      const implementation = [
        {
          fields: {
            tags: [
              {
                fields: {
                  title: 'tag',
                  date: '2020-01-01',
                },
              },
              {
                fields: {
                  title: 'tag',
                  date: '2021-01-01',
                },
              },
            ],
          },
        },
      ]
      mockResponse.mockImplementation(() => ({
        items: implementation,
      }))
      const response = await fetchContentful({ tag: 'tag' })
      expect(response).toStrictEqual({
        content: [],
        items: implementation,
      })
    })
  })
  describe('The function throws errors...', () => {
    it('when items is undefined', async () => {
      mockResponse.mockImplementation(() => ({
        items: undefined,
      }))
      try {
        await fetchContentful({ type: 'tile' })
      } catch (e) {
        expect(e).toMatch('error')
      }
    })

    it('when tag entries are undefined', async () => {
      mockResponse.mockImplementation(() => ({
        items: undefined,
      }))
      try {
        await fetchContentful({ tag: 'tile' })
      } catch (e) {
        expect(e).toMatch('error')
      }
    })
  })
})
