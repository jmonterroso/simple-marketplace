import { ILogin } from '../../components/LoginForm';
import { loginPost } from '../../api';
import { IAuth } from '../reducers/authReducer';

export const setAuth = (payload: IAuth) => ({
  type: 'SET_AUTH',
  payload,
});

export const authLoading = () => ({
  type: 'AUTH_LOADING',
});

// export const authError = (payload) => ({
//   type: 'AUTH_ERROR',
//   payload,
// });

export const login = (value: ILogin) => (dispatch: any) => {
  dispatch(authLoading());
  loginPost(value)
    .then((res) => {
      if (res.status === 200) {
        dispatch(setAuth({ isAuthenticated: true, user: res.user }));
      }
    })
    .catch((err) => {
      console.log(err);
      // dispatch(authError(err));
    });
};
