import base from '../../jest.config.base';

export default base('gamut-icons', {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  setupFiles: [
    '<rootDir>/../../script/jest/base-setup.js',
    '<rootDir>/../../script/jest/enzyme-setup.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/../../script/jest/rtl-setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
});
