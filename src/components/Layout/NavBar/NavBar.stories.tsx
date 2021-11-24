import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import NavBar, { Props } from './index';
import { mountScene } from '../../../core/test';

export default {
  title: 'NavBar',
} as Meta;

const story: Story<Props> = (args) => mountScene(<NavBar {...args}></NavBar>);

export const Default = story.bind({});
Default.args = {
  title: 'NavBar',
};
export const LoggedIn = story.bind({});
LoggedIn.args = {
  isLoggedIn: true,
};
export const LoggedOut = story.bind({});
LoggedOut.args = {
  isLoggedIn: true,
};

export const ItemsInBasket = story.bind({});
ItemsInBasket.args = {
  items: 5,
};

export const EmptyCart = story.bind({});
EmptyCart.args = {
  items: 0,
};
