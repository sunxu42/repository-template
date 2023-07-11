import { StorybookConfig } from '@storybook/types';

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../modules/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-addon-angular-router',
    'storybook-dark-mode',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
