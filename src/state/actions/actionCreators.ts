import { ILogin } from '../../components/LoginForm';
import { loginPost } from '../../api';
import { IAuth } from '../reducers/authReducer';
import { IProduct } from '../../components/Product';

export const setAuth = (payload: IAuth) => ({
  type: 'SET_AUTH',
  payload,
});

export const authLoading = () => ({
  type: 'AUTH_LOADING',
});

export const login = (value: ILogin) => (dispatch: any) => {
  dispatch(authLoading());
  loginPost(value).then((res) => {
    if (res.status === 200) {
      dispatch(setAuth({ isAuthenticated: true, user: res.user }));
    }
  });
};

export const addToCart = (payload: IProduct) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const updateCart = (payload: IProduct) => ({
  type: 'UPDATE_CART',
  payload,
});
export const deleteFromCart = (payload: string) => ({
  type: 'DELETE_FROM_CART',
  payload,
});
