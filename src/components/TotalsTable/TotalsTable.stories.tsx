import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import TotalsTable, { Props } from './index';
import { mountScene } from '../../core/test';
import { mockProps } from './constants';

export default {
  title: 'TotalsTable',
} as Meta;

const story: Story<Props> = (args) => mountScene(<TotalsTable {...args} />);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};
