import { Props } from './index';
import { products } from '../../__mocked__/products';

export const mockProps: Props = {
  product: products[0],
  updateCart: () => 'noop',
  removeFromCart: () => 'noop',
};
