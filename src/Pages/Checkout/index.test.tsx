// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './ProductList.stories';
import { MountTestScene } from '../../core/test';

describe('components/Checkout', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MountTestScene>
        <Default {...Default.args} />
      </MountTestScene>
    );
    const navigation = getByTestId('checkout-title');
    expect(navigation).toBeTruthy();
  });
});
