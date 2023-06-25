import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';
import { Button } from '@mui/material';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <span className={css.span}>Hello, {name} </span>
      <Button
      variant="contained"
      sx={{
        mt: 2,
        mb: 2,
        color: '#0f1111',
        background: '#6688d0',
      }}
        onClick={onLogOut} 
        type="button">
        Log Out
      </Button>
    </div>
  );
};
