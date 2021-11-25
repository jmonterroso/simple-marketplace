import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './ProductList.stories';

describe('components/ProductList', () => {
  it('should render', () => {
    const { getByPlaceholderText } = render(<Default {...Default.args} />);
    const thanksMessage = getByPlaceholderText('Search');
    expect(thanksMessage).toBeTruthy();
  });
});
