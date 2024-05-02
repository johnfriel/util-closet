module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"  // Map all modules starting with '~/' to the 'src' directory
  }
};