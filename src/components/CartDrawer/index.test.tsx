import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './CartDrawer.stories';
import { mockProps } from './constants';

describe('components/CartDrawer', () => {
  it('should render', () => {
    const { getByText } = render(<Default {...Default.args} {...mockProps} />);
    const title = getByText('Cart');
    const noProductsLabel = getByText('No products in cart');
    expect(title).toBeTruthy();
    expect(noProductsLabel).toBeTruthy();
  });
});
