import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemCard } from './Card';

export default {
  title: 'Crad/card',
  component: ItemCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Title',
};

