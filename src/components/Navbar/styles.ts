import styled from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';

export const NavbarContainer = styled.nav`
  height: auto;
  background-color: ${COLORS.navbarHero};
  display: flex;
  flex-direction: row;
  ${HORIZONTAL_SPACE}
  padding-top: 44px;
  align-items: center;
  justify-content: space-between;

  .menu-right {
    gap: 33px;

    .menu-item {
      &:last-child {
        text-decoration: underline;
      }
    }
  }
`;

export const NavbarLogoContainer = styled.div`
  width: 236px;
  height: 70px;
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  width: 236px;
  height: 70px;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 47px;
  list-style: none;

  @media (max-width: 1392px) {
    margin-left: 35px;
    gap: 33px;
  }
`;

interface NavbarMenuItemProps {
  active?: boolean;
}

export const NavbarMenuItem = styled.li<NavbarMenuItemProps>`
  color: ${({ active }) => (active ? '#fff' : COLORS.text)};
  font-size: 16px;
  font-weight: 400;
`;
