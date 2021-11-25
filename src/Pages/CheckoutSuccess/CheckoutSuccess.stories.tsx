import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import CheckoutSuccess from './index';
import { mountScene, MountTestScene } from '../../core/test';

export default {
  title: 'CheckoutSuccess',
} as Meta;

const story: Story = (args) =>
  mountScene(
    <MountTestScene>
      <CheckoutSuccess {...args} />
    </MountTestScene>
  );

export const Default = story.bind({});
Default.args = {};
