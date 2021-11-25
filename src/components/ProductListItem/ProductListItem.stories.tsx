import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import ProductListItem, { Props } from './index';
import { mountScene } from '../../core/test';
import { mockProps } from './constants';

export default {
  title: 'ProductListItem',
} as Meta;

const story: Story<Props> = (args) => mountScene(<ProductListItem {...args} />);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};
