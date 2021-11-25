import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import CartDrawer, { Props } from './index';
import { MountTestScene } from '../../core/test';
import { mockProps } from './constants';

export default {
  title: 'CartDrawer',
} as Meta;

const story: Story<Props> = (args) => (
  <MountTestScene>
    <CartDrawer {...args} />
  </MountTestScene>
);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};
