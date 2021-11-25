import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './ProductPlaceholder.stories';

describe('components/ProductPlaceholder', () => {
  it('should render', () => {
    const { getByTestId } = render(<Default {...Default.args} />);
    const productPlaceholder = getByTestId('product-placeholder');
    expect(productPlaceholder).toBeTruthy();
  });
});
