import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <NavLink className={css.navlink} to="/home">Нome</NavLink>
      {isLogin && <NavLink className={css.navlink} to="/contacts">Contacts</NavLink>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};
