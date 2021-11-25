import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
export type RootState = ReturnType<typeof reducers>;

export default reducers;
