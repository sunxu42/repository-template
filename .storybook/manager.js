import { addons } from '@storybook/addons';
import theme from './theme.js';

addons.setConfig({
  isFullscreen: false,
  sidebar: {
    showRoots: true
  },
  theme: theme
});
