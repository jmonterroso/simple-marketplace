// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './Product.stories';
import { MountTestScene } from '../../core/test';
import { mockProps } from './constants';

describe('components/Product', () => {
  it('should render', () => {
    const { getByText } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} />
      </MountTestScene>
    );
    const title = getByText('Product 1 - 1');

    expect(title).toBeTruthy();
  });
  it('should call the addToCart function on click', () => {
    const addToCartFn = jest.fn();
    const { getByText } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} addToCart={addToCartFn} />
      </MountTestScene>
    );
    const button = getByText('Add to Cart');
    fireEvent.click(button);
    expect(addToCartFn).toHaveBeenCalled();
  });
});
