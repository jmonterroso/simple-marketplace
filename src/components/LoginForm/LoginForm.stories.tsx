import React from 'react';
// This is the new structure to be used for storybook 6
import { Meta, Story } from '@storybook/react/types-6-0';
import LoginForm, { Props } from './index';
import { mountScene } from '../../core/test';

export default {
  title: 'LoginForm',
} as Meta;

const story: Story<Props> = (args) => mountScene(<LoginForm {...args}></LoginForm>);

export const Default = story.bind({});
Default.args = {
  onSubmit: (fields) => {
    console.log(fields, 'fields');
  },
};
