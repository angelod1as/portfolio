import fetchNotion from '.'
import { Client } from '@notionhq/client'

jest.mock('@notionhq/client')

describe('Fetch and parse data from Notion', () => {
  it('returns nothing when empty result', async () => {
    ;(Client as unknown as jest.Mock).mockImplementation(() => ({
      databases: {
        query: () => ({
          results: [],
        }),
      },
    }))

    const response = await fetchNotion()
    expect(response).toStrictEqual([])
  })

  it('returns correctly with full information', async () => {
    ;(Client as unknown as jest.Mock).mockImplementation(() => ({
      databases: {
        query: () => ({
          results: [
            {
              archived: false,
              created_time: '123',
              last_edited_time: '123',
              properties: {
                Public: true,
                'Quick note': {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                Image: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                Name: {
                  title: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                Tag: {
                  multi_select: [
                    {
                      name: 'name',
                    },
                  ],
                },
                Status: {
                  select: {
                    name: 'name',
                  },
                },
              },
            },
          ],
        }),
      },
    }))

    const shouldReturn = [
      {
        createdTime: '123',
        image: 'plain',
        lastEditedTime: '123',
        quickNote: 'plain',
        status: 'name',
        tags: ['name'],
        title: 'plain',
      },
    ]

    const response = await fetchNotion()
    expect(response).toStrictEqual(shouldReturn)
  })

  it('returns correctly with lacking information', async () => {
    ;(Client as unknown as jest.Mock).mockImplementation(() => ({
      databases: {
        query: () => ({
          results: [
            {
              archived: false,
              created_time: '123',
              last_edited_time: '123',
              properties: {
                Public: true,
                'Quick note': {},
                Image: {},
                Name: {},
                Tag: {},
                Status: {},
              },
            },
          ],
        }),
      },
    }))

    const shouldReturn = [
      {
        createdTime: '123',
        lastEditedTime: '123',
        image: null,
        quickNote: null,
        status: null,
        tags: null,
        title: null,
      },
    ]

    const response = await fetchNotion()
    expect(response).toStrictEqual(shouldReturn)
  })
})
