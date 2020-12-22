import { Story, Meta } from '@storybook/angular';
import LinkButton from './linkButton.component';


export default {
  title: 'Example/LinkButton',
  component: LinkButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LinkButton> = (args: LinkButton) => ({
  component: LinkButton,
  props: args,
});

export const linkButton = Template.bind({});
linkButton.args = {
  disabled: true,
  label: 'Link Button',
};

