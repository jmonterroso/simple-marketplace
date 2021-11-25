// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './TotalsTable.stories';
import { MountTestScene } from '../../core/test';
import { mockProps } from './constants';

describe('components/ProductListItem', () => {
  it('should render', () => {
    const { getByText } = render(
      <MountTestScene>
        <Default {...Default.args} {...mockProps} />
      </MountTestScene>
    );
    const subTotalLabel = getByText('Subtotal');
    const subTotal = getByText('$500.00');
    const tax = getByText('$200.00');
    const taxLabel = getByText('Tax');
    const total = getByText('$700.00');
    const totalLabel = getByText('Total');

    expect(subTotal).toBeTruthy();
    expect(subTotalLabel).toBeTruthy();
    expect(taxLabel).toBeTruthy();
    expect(tax).toBeTruthy();
    expect(totalLabel).toBeTruthy();
    expect(total).toBeTruthy();
  });
});
