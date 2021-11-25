import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import Checkout from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'Checkout',
} as Meta;

const story: Story = (args) => mountScene(<Checkout {...args} />);

export const Default = story.bind({});
Default.args = {};
