
import { Story, Meta } from '@storybook/angular';

import CheckBox from './checkbox.component';

export default {
  title: 'Example/Checkbox',
  component: CheckBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckBox> = (args: CheckBox) => ({
  component: CheckBox,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'checkbox',
};
