import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import ProductList from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'ProductList',
} as Meta;

const story: Story = (args) => mountScene(<ProductList {...args} />);

export const Default = story.bind({});
Default.args = {};
