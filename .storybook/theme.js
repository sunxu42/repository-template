import logo from './assets/logo/qima-logo.png';
import { create, themes } from '@storybook/theming';

/**
 * Theming Storybook docs:
 * https://storybook.js.org/docs/configurations/theming/
 */
export default create({
  base: themes.light,
  brandImage: logo,
  brandTitle: 'Arthur',
  colorPrimary: '#E70022'
});
