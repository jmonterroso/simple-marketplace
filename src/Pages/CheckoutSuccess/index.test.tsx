// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './CheckoutSuccess.stories';

describe('pages/CheckoutSuccess', () => {
  it('should render', () => {
    const { getByText } = render(<Default {...Default.args} />);
    const thanksMessage = getByText('Thank you for your order!');
    expect(thanksMessage).toBeTruthy();
  });
});
