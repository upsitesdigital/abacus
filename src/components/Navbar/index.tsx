import { MENU_ITEMS, MENU_ITEMS_MOBILE } from './../../utils/constants';
import {
  HamburgerMenuButton,
  MenuMobileOverlay,
  NavbarContainer,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarMenu,
  NavbarMenuItem,
} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const layoutContent = document.getElementById('layout-body');

    if (layoutContent) {
      if (menuOpen) {
        (layoutContent as any).style.overflow = menuOpen ? 'hidden' : 'auto';
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
      } else {
        (layoutContent as any).style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    }
  }, [menuOpen]);

  return (
    <NavbarContainer>
      <NavbarLogoContainer
        onClick={() => {
          closeMenu();
          router.push('/');
        }}
      >
        <NavbarLogo src="/logo.png" />
      </NavbarLogoContainer>

      <NavbarMenu>
        {MENU_ITEMS.slice(0, 3).map((item) => (
          <NavbarMenuItem
            active={item.route === router.pathname}
            key={item?.route}
          >
            <Link href={item?.route}>{item?.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenu className="menu-right">
        {MENU_ITEMS.slice(3, 5).map((item) => (
          <NavbarMenuItem
            // data-aos="fade-down"
            className="menu-item"
            active={item.route === router.pathname}
            key={item?.route}
          >
            <Link href={item?.route}>{item?.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <HamburgerMenuButton
        isOpen={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </HamburgerMenuButton>

      <MenuMobileOverlay style={{ top: menuOpen ? '0' : '-150%' }}>
        {menuOpen && (
          <NavbarLogoContainer
            className="logo-mobile"
            onClick={() => {
              closeMenu();
              router.push('/');
            }}
          >
            <NavbarLogo src="/logo.png" />
          </NavbarLogoContainer>
        )}
        <div className="menu-mobile">
          {MENU_ITEMS_MOBILE.map((item) => (
            <li
              onClick={() => closeMenu()}
              className="menu-item"
              key={item?.route}
            >
              <Link href={item?.route}>{item?.title}</Link>
              <img className="arrow" src="/arrow-up-right-3.svg" />
            </li>
          ))}
        </div>
      </MenuMobileOverlay>
    </NavbarContainer>
  );
};

export default Navbar;
