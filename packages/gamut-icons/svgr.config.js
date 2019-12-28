const template = require('./icon-template');

module.exports = {
  icon: true,
  dimensions: false,
  titleProp: true,
  svgProps: {
    width: '{size || width || "16px"}',
    height: '{size || height || "16px"}',
    fill: '{color || "currentColor"}',
    role: 'img',
  },
  replaceAttrValues: {
    currentColor: '{color || "currentColor"}',
    '#000': '{color || "currentColor"}',
    '#111': '{color || "currentColor"}',
    '#444': '{color || "currentColor"}',
  },
  template,
};
