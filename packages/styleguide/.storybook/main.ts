const path = require('path');
const { configs } = require('@codecademy/webpack-config');

// https://github.com/storybookjs/storybook/issues/12262#issuecomment-681953346
// make a shallow copy of an object, rejecting keys that match /emotion/
function emotionless<T extends Record<string, unknown>>(object: T) {
  let result = {} as T;
  for (let key in object) {
    if (!/emotion/.test(key)) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = {
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    './addons/system/preset',
    'storybook-addon-designs',
  ],
  features: {
    storyStoreV7: true, //!global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
  },
  stories: [
    {
      directory: '../stories',
      titlePrefix: 'Stories',
      files: '*.stories.*',
    },
    {
      directory: '../stories/Atoms',
      titlePrefix: 'Atoms',
      files: '*.stories.*',
    },
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop: any) => {
        // allow reach-ui types
        if (prop.parent && /@reach/.test(prop.parent.fileName)) {
          return true;
        }
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },

  webpackFinal: (config: any) => {
    config.module.rules = config.module.rules.concat(
      configs.css().module.rules
    );

    config.resolve = {
      ...config.resolve,
      alias: {
        ...emotionless(config.resolve.alias),
        '~styleguide/blocks': path.resolve(__dirname, './components/'),
        '@codecademy/storybook-addon-variance': path.resolve(
          __dirname,
          './addons/system/components/'
        ),
        '@codecademy/gamut-styles$': path.resolve(
          __dirname,
          '../../gamut-styles/src'
        ),

        '@codecademy/gamut$': path.resolve(__dirname, '../../gamut/src'),
        '@codecademy/gamut-labs$': path.resolve(
          __dirname,
          '../../gamut-labs/src'
        ),
        '@codecademy/gamut-illustrations$': path.resolve(
          __dirname,
          '../../gamut-illustrations/src'
        ),
        '@codecademy/variance$': path.resolve(__dirname, '../../variance/src'),
      },
    };

    return config;
  },
};
