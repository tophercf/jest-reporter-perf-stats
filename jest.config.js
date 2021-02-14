module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  reporters: ['default','<rootDir>/build/index.js'],
  setupFilesAfterEnv: ['./setup.js']
};