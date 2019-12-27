const template = require('./icon-template');

module.exports = {
  dimensions: false,
  titleProp: true,
  ref: true,
  svgProps: {
    width: '{size || width || "1em"}',
    height: '{size || height || "1em"}',
    fill: '{color || "currentColor"}',
    role: 'img',
  },
  replaceAttrValues: {
    '#000': '{color || "currentColor"}',
    '#111': '{color || "currentColor"}',
    '#444': '{color || "currentColor"}',
  },
  template,
};
