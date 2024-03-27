import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export const AuthNav = () => {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/login" className={isActive}>
          Log in
        </NavLink>
        <NavLink to="/register" className={isActive}>
          Register
        </NavLink>
      </nav>
    </>
  );
};
