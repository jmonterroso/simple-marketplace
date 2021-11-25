import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import CartDrawer, { Props } from './index';
import { MountTestScene } from '../../core/test';
import { products } from '../../__mocked__/products';

export default {
  title: 'CartDrawer',
} as Meta;

const mockProps: Props = {
  open: true,
  setOpen: () => 'noop',
  products: products,
};
const story: Story<Props> = (args) => (
  <MountTestScene>
    <CartDrawer {...args} />
  </MountTestScene>
);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};
