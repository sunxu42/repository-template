import { SoapBubbleComponent } from './soap-bubble.component';
import { Meta } from '@storybook/angular';

export default {
  title: 'SoapBubble',
  component: SoapBubbleComponent
} as Meta<SoapBubbleComponent>;

export const Primary = {
  render: (args: SoapBubbleComponent) => ({
    props: args
  }),
  args: {}
};
