// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './CheckoutSuccess.stories';
import { MountTestScene } from '../../core/test';

describe('components/Checkout', () => {
  it('should render', () => {
    const { getByText } = render(
      <MountTestScene>
        <Default {...Default.args} />
      </MountTestScene>
    );
    const thanksMessage = getByText('Thank you for your order!');
    expect(thanksMessage).toBeTruthy();
  });
});
