import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';
import { Logout } from '../Logout/Logout';

export const AppBar = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLogged ? <Logout /> : <AuthNav />}
    </header>
  );
};
