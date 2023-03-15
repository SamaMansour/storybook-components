import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButtonItem } from './RadioButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Items/RadioButton',
  component: RadioButtonItem,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioButtonItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButtonItem> = (args) => <RadioButtonItem {...args} />;



export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Button',

};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
};
