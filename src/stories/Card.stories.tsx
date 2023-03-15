import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemCard } from './Card';

export default {
  title: 'Items/card',
  component: ItemCard,
  argTypes: {
  },
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Title',
};

