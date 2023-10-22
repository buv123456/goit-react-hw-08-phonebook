import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  font-size: 18px;
  font-weight: bold;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid black;
  background-color: #fff;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  letter-spacing: -1px;
  transition: all 200ms ease;

  &:hover {
    scale: 1.2;
    text-shadow: 0 0 8px #4a4a4a;
  }
  &.active {
    color: #5333b0;
    text-shadow: 0 0 5px teal;
    scale: 1.1;
  }
`;

export const MenuStyled = styled.div`
  font-size: 14px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const UserMenuButton = styled.button`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 26px;
  font-size: 14px;
  color: #fff;
  background-color: #5333b0;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 1px 3px 1px rgb(26 115 232 / 30%);
    background-color: #774aff;
  }
`;
