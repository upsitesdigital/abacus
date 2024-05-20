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
        {MENU_ITEMS.map((item) => (
          <NavbarMenuItem
            data-aos="fade-down"
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
