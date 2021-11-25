import { Props } from './index';

export const labels = {
  title: 'n marketplace',
  login: 'Login',
  logout: 'Logout',
};
export const mockProps: Props = {
  items: 5,
  onClickCart: () => 'noop',
  title: 'NavBar',
  isLoggedIn: false,
  onLogout: () => 'noop',
};
