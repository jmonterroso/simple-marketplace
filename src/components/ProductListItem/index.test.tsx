// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default, mockProps } from './ProductListItem.stories';
import { MountTestScene } from '../../core/test';

describe('components/ProductListItem', () => {
  it('should render', () => {
    const { getByText } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} />
      </MountTestScene>
    );
    const product = getByText('Product 1');
    const price = getByText('$10.00');

    expect(product).toBeTruthy();
    expect(price).toBeTruthy();
  });
  it('should call the delete function on click', () => {
    const removeFromCart = jest.fn();
    const { getByTestId } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} removeFromCart={removeFromCart} />
      </MountTestScene>
    );
    const button = getByTestId('remove-product');
    fireEvent.click(button);
    expect(removeFromCart).toHaveBeenCalled();
  });
  it('should call the update function on change input', () => {
    const updateCart = jest.fn();
    const { getByTestId } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} updateCart={updateCart} />
      </MountTestScene>
    );
    const input = getByTestId('update-product-input');
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.blur(input);
    expect(updateCart).toHaveBeenCalled();
  });
});
