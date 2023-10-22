import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { MenuStyled, UserMenuButton } from './Header.styled';
import Spinner from 'react-spinner-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  return (
    <MenuStyled>
      <p>Welcome, {user.name}</p>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        {isLoading ? (
          <Spinner radius={10} color={'#fff'} stroke={2} visible={true} />
        ) : (
          'Sign out'
        )}
      </UserMenuButton>
    </MenuStyled>
  );
};
