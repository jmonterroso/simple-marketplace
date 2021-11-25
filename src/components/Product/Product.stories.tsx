import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import Product, { Props } from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'Product',
} as Meta;

const mockProps: Props = {
  product: {
    id: '1',
    price: 20,
    name: 'Apple',
    description: 'Macintosh',
    sku: '1234',
  },
  addToCart: () => {
    console.log('add to cart');
  },
};
const story: Story<Props> = (args) => mountScene(<Product {...args} />);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
};