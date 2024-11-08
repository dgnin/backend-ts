import { Config } from 'jest';

const config: Config = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@apps/(.*)$': '<rootDir>/src/apps/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
  },
};

export default config;
