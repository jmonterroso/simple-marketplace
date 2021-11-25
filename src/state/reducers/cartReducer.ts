import { IProduct } from '../../components/Product';

export interface ICart {
  cart: IProduct[];
  tax?: number;
  total: number;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
  successMessage?: string;
}

const initialState = {
  cart: [],
  tax: 0,
  total: 0,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: '',
  successMessage: '',
};
const calculateTotal = (cart: IProduct[]) => {
  let total = 0;
  cart.forEach((item) => {
    const subtotal = Number(item.price) * Number(item.qty);
    total += subtotal;
  });
  return total;
};

const calculateTax = (cart: IProduct[]) => {
  let tax = 0;
  cart.forEach((item) => {
    const subtotal = Number(item.price) * Number(item.qty);
    tax += subtotal * 0.15;
  });
  return tax;
};

const updateCart = (cart: IProduct[], payload: IProduct) => {
  return cart.map((item: IProduct) => {
    if (item.id === payload.id) {
      return { ...item, qty: item.qty + payload.qty };
    }
    return item;
  });
};
const removeFromCart = (cart: IProduct[], payload: string) => {
  return cart.filter((item: IProduct) => item.id !== payload);
};

const cartReducer = (state: ICart = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: calculateTotal([...state.cart, action.payload]),
        tax: calculateTax([...state.cart, action.payload]),
      };

    case 'REMOVE_FROM_CART':
      return state.cart.filter((item: IProduct) => item.id !== action.payload);
    case 'UPDATE_CART':
      return {
        ...state,
        cart: updateCart(state.cart, action.payload),
        total: calculateTotal(updateCart(state.cart, action.payload)),
        tax: calculateTax(updateCart(state.cart, action.payload)),
      };
    case 'UPDATE_TOTAL':
      return { ...state, total: action.payload };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload),
        total: calculateTotal(removeFromCart(state.cart, action.payload)),
        tax: calculateTax(removeFromCart(state.cart, action.payload)),
      };
    default:
      return state;
  }
};

export default cartReducer;
