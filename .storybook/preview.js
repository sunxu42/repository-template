import logo from './assets/logo/qima-logo.png';
import { themes } from '@storybook/theming';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

// Registers and enable languages support
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('json', json);

export const parameters = {
  action: {
    argTypesRegex: '^on[A-Z].*'
  },
  layout: 'centered',
  controls: {
    expanded: true
  },
  chromatic: {
    disableSnapshot: true
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '640px',
          height: '360px'
        },
        type: 'phone'
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '1024px',
          height: '768px'
        },
        type: 'tablet'
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1360px',
          height: '768px'
        },
        type: 'desktop'
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1680px',
          height: '1050px'
        },
        type: 'desktop'
      },
      highDefinition: {
        name: 'High definition',
        styles: {
          width: '2560px',
          height: '1080px'
        },
        type: 'desktop'
      }
    },
    disable: false
  },
  docs: {
    theme: themes.light,
    inlineStories: false
  },
  darkMode: {
    dark: {
      ...themes.dark,
      brandImage: logo,
      brandTitle: 'NGX QIMA',
      colorPrimary: '#E70022',
      stylePreview: true
    },
    light: {
      ...themes.light,
      brandImage: logo,
      brandTitle: 'NGX QIMA',
      colorPrimary: '#E70022',
      stylePreview: true
    },
    classTarget: 'html',
    darkClass: 'dark-mode-enabled',
    lightClass: 'dark-mode-disabled'
  },
  options: {
    storySort: {
      method: 'alphabetical',
      includeName: false,
      order: [
        'Introduction',
        [
          'Introduction',
          'Getting started',
          'Assets',
          'Styles',
          'Translations',
          'Dates',
          'Fonts',
          'Typography',
          'Spacings',
          'Modal',
          'Logger',
          'Releases',
          'Need help'
        ],
        '*',
        'Examples',
        'Overview'
      ]
    }
  }
};
