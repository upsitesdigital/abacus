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

  @media (max-width: 900px) {
    padding-top: 28px;
    justify-content: flex-start;
  }
`;

export const NavbarLogoContainer = styled.div`
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  width: 236px;
  height: 70px;

  @media (max-width: 1115px) {
    width: 200px;
    height: auto;
  }

  @media (max-width: 1115px) {
    width: 200px;
    height: auto;
  }

  @media (max-width: 1075px) {
    width: 150px;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 122px;
    height: 36.15px;
  }
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

  @media (max-width: 980px) {
    display: none;
  }
`;

interface NavbarMenuItemProps {
  active?: boolean;
}

export const NavbarMenuItem = styled.li<NavbarMenuItemProps>`
  color: ${({ active }) => (active ? '#fff' : COLORS.text)};
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    transition: 0.5s;
    &:hover {
      color: #fff;
    }
  }
`;

interface HMButtonProps {
  isOpen: boolean;
}

export const HamburgerMenuButton = styled.button<HMButtonProps>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
  right: 24px;
  z-index: 12;
  top: 28px;
  outline: none;
  border: none;
  background-color: transparent;

  @media (min-width: 980px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    height: 2.5px;
    width: 24px;
    background: #fff;
    transition: 0.4s;
    border-radius: 5px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  `}
`;

export const MenuMobileOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: ${COLORS.navbarHero};
  left: 0;
  top: 0;
  z-index: 9;
  padding-top: 114px;
  padding-left: 24px;
  padding-right: 24px;
  top: -100%;
  transition: 0.3s;

  .logo-mobile {
    position: fixed;
    top: 28px;
    left: 24px;
  }

  @media (max-width: 960px) {
    display: flex;
  }

  .menu-mobile {
    width: 100%;
    list-style: none;
  }

  .menu-item {
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 28px;
    margin-bottom: 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border: none;
    }
  }

  .menu-item .arrow {
    transform: rotate(-80deg);
  }
`;
