import React from 'react';
import { Login, Props } from './index';
import { StoryWrapper, storyBuilder, KnobsInterface } from 'core/stories';

const mockProps: Props = {};

export const renderScene =
  (knobProps: Props) =>
  (knobs: KnobsInterface, props: Props = knobProps) =>
    <Login />;

export const scenes = {
  DefaultsCheckbox: renderScene({ ...mockProps }),
};

storyBuilder(scenes, 'Components/LoginForm', StoryWrapper);
