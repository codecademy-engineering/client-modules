const baseConfig = require('../../jest.config.base');
const packageName = require('./package.json').name.split('@codecademy/').pop();

module.exports = {
  name: packageName,
  displayName: packageName,
  testRegex: `packages\\/${packageName}\\/.*${baseConfig.testRegex}`,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
