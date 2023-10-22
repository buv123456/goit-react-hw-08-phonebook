import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { HeaderStyled, NavLinkStyled, NavStyled } from './Header.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </NavStyled>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
