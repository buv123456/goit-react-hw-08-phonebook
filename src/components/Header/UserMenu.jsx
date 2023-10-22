import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { MenuStyled, UserMenuButton } from './Header.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuStyled>
      <p>Welcome, {user.name}</p>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Sign out
      </UserMenuButton>
    </MenuStyled>
  );
};
