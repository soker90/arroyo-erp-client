module.exports = {
  'stories': [
    '../src/**/*.stories.@(js|jsx|mdx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': 'webpack5'
  },
  staticDirs: ['../public'],
};
