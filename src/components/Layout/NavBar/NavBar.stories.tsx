import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import NavBar, { Props } from './index';
import { mountScene, MountTestScene } from '../../../core/test';
import { mockProps } from './constants';

export default {
  title: 'NavBar',
} as Meta;

const story: Story<Props> = (args) => (
  <MountTestScene>
    <NavBar {...args} />
  </MountTestScene>
);

export const Default = story.bind({});
Default.args = {
  ...mockProps,
  title: 'NavBar',
};
export const LoggedIn = story.bind({});
LoggedIn.args = {
  ...mockProps,
  isLoggedIn: true,
};
export const LoggedOut = story.bind({});
LoggedOut.args = {
  ...mockProps,
  isLoggedIn: true,
};

export const ItemsInBasket = story.bind({});
ItemsInBasket.args = {
  ...mockProps,
  items: 5,
};

export const EmptyCart = story.bind({});
EmptyCart.args = {
  ...mockProps,
  items: 0,
};
