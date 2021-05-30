module.exports = {
  collectCoverageFrom: ['src/**/!(*.stories).{ts,tsx}', '!**/styles.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@sections/(.*)': '<rootDir>/src/components/sections/$1',
    '@functions/(.*)': '<rootDir>/src/functions/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@data/(.*)': '<rootDir>/data/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@types/(.*)': '<rootDir>/src/@types/$1',
    '@i18n/(.*)': '<rootDir>/src/i18n/$1',
    '@test/(.*)': '<rootDir>/src/test/$1',
  },
}
