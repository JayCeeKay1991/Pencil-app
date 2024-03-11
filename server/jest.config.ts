import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // Assuming your TypeScript files are in a src directory
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/*.test.ts'], // Match test files with .test.ts
  transform: {
    '^.+\\.(ts)$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  globals: { 'ts-jest': {
    tsconfig: 'tsconfig.test.json'
  }}
  // Optional: You can add other configurations as needed
};

export default config;
