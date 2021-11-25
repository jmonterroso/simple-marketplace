import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import TotalsTable, { Props } from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'TotalsTable',
} as Meta;

const mockProps: Props = {
  tax: 200,
  subtotal: 500,
  total: 700,
};
const story: Story<Props> = (args) => mountScene(<TotalsTable {...args} />);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};
