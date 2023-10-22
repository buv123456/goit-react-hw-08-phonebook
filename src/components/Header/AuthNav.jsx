import { MenuStyled, NavLinkStyled } from './Header.styled';

export const AuthNav = () => {
  return (
    <MenuStyled>
      <NavLinkStyled to="/register">Sign up</NavLinkStyled>
      <NavLinkStyled to="/login">Sign in</NavLinkStyled>
    </MenuStyled>
  );
};
