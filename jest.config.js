module.exports = {
  collectCoverageFrom: [
    'src/**/!(*.stories).{ts,tsx}',
    '!**/styles.ts',
    '!**/*.mdx',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@test/(.*)': '<rootDir>/src/test/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@content/(.*)': '<rootDir>/src/content/$1',
  },
}
