import { MENU_ITEMS } from '~/utils/constants';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarMenu,
  NavbarMenuItem,
} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()

  return (
    <NavbarContainer>
      <NavbarLogoContainer onClick={() => router.push('/')}>
        <NavbarLogo src="/logo.png" />
      </NavbarLogoContainer>

      <NavbarMenu>
        {MENU_ITEMS.slice(0,3).map((item) => (
          <NavbarMenuItem
            data-aos="fade-down"
            active={item.route === router.pathname}
            key={item?.route}
          >
            <Link href={item?.route}>{item?.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenu className='menu-right'>
        {MENU_ITEMS.slice(3,5).map((item) => (
          <NavbarMenuItem
            data-aos="fade-down"
            className='menu-item'
            active={item.route === router.pathname}
            key={item?.route}
          >
            <Link href={item?.route}>{item?.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
