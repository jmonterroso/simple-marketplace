import { IProduct } from '../../components/Product';

export interface ICart {
  cart: IProduct[];
  total: number;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
  successMessage?: string;
}

const initialState = {
  cart: [],
  total: 0,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: '',
  successMessage: '',
};

const cartReducer = (state: ICart = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };

    case 'REMOVE_FROM_CART':
      return state.cart.filter((item: IProduct) => item.id !== action.payload);
    case 'UPDATE_CART':
      return {
        ...state,
        cart: state.cart.map((item: IProduct) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + action.payload.qty };
          }
          return item;
        }),
      };
    case 'UPDATE_TOTAL':
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
