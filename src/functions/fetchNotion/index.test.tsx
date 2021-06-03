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
                public: {
                  checkbox: true,
                },
                title_pt: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                note_pt: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                title_en: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                note_en: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                image: {
                  rich_text: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                link: {
                  rich_text: [
                    {
                      plain_text: 'url',
                    },
                  ],
                },
                external_link: {
                  rich_text: [
                    {
                      plain_text: 'url',
                    },
                  ],
                },
                name: {
                  title: [
                    {
                      plain_text: 'plain',
                    },
                  ],
                },
                tag: {
                  multi_select: [
                    {
                      name: 'name',
                    },
                  ],
                },
                status: {
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
        en: {
          title: 'plain',
          note: 'plain',
        },
        pt: {
          title: 'plain',
          note: 'plain',
        },
        status: 'name',
        tags: ['name'],
        link: 'url',
        externalLink: 'url',
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

    const shouldReturn = []

    const response = await fetchNotion()
    expect(response).toStrictEqual(shouldReturn)
  })
})
