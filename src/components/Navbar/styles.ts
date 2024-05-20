import styled from 'styled-components';
import { COLORS, HORIZONTAL_SPACE, PADDINGS } from '~/utils/constants';

export const NavbarContainer = styled.nav`
  height: auto;
  background-color: ${COLORS.navbarHero};
  display: flex;
  flex-direction: row;
  ${HORIZONTAL_SPACE}
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogoContainer = styled.div`
  width: 236px;
  height: 70px;
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  width: inherit;
  height: inherit;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 65px;
  list-style: none;
`;


interface NavbarMenuItemProps {
  active?:boolean
}

export const NavbarMenuItem = styled.li<NavbarMenuItemProps>`
  color: ${({ active })=> active ? "#fff" : COLORS.text};
  font-size: 16px;
  font-weight: 400;

  &:nth-child(4) {
    margin-left: 100px;
  }

  &:nth-child(5) {
    text-decoration: underline;
  }
`;
