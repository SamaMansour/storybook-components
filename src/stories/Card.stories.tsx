import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemCard } from './Card';

export default {
  title: 'Crad/title',
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

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Title',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Title',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Title',
};
