export interface IUser {
  name: string;
  email: string;
}

export interface IAuth {
  isAuthenticated: boolean;
  user?: IUser;
}
const initialState: IAuth = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
