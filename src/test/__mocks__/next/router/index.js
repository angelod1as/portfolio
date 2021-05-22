jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),

  default: {
    ...jest.requireActual('next/router').default,
    push: jest.fn(),
    replace: jest.fn(),
  },

  useRouter: () => ({
    ...jest.requireActual('next/router').useRouter,
    locale: 'pt',
    locales: ['pt', 'en'],
    push: jest.fn().mockImplementation(() => Promise.resolve()),
  }),
}))

// export the mocked instance above
module.exports = jest.requireMock('next/router')
