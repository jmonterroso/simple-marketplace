import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import CheckoutForm, { Props } from './index';
import { mountScene, MountTestScene } from '../../core/test';

export default {
  title: 'CheckoutForm',
} as Meta;

const story: Story<Props> = (args) =>
  mountScene(
    <MountTestScene>
      <CheckoutForm {...args} />
    </MountTestScene>
  );

export const Default = story.bind({});
Default.args = {
  onSubmit: (fields) => {
    console.log(fields, 'fields');
  },
};
