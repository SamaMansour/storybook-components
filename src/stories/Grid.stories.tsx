import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemGrid } from './Grid';

export default {
  title: 'Grid/grid',
  component: ItemGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ItemGrid>;

const Template: ComponentStory<typeof ItemGrid> = (args) => <ItemGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Title',
};


