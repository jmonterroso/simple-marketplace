import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import ProductPlaceholder from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'ProductPlaceholder',
} as Meta;

const story: Story = (args) => mountScene(<ProductPlaceholder {...args} />);

export const Default = story.bind({});
Default.args = {};
