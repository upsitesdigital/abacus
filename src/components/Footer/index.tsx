import { MENU_ITEMS } from '~/utils/constants';
import {
  FooterContainer,
  FooterContactInfo,
  FooterContactInfoTitle,
  FooterCopyRightContainer,
  FooterCopyRightText,
  FooterLogo,
  FooterLogoContainer,
  FooterMenu,
  FooterMenuItem,
} from './styles';
import Link from 'next/link';

const Footer = ({ isContact = false }: { isContact?: boolean }) => {
  return (
    <FooterContainer
      style={{
        paddingTop: isContact ? 50 : 'auto',
      }}
    >
      {!isContact && (
        <>
          <div className="container">
            <FooterLogoContainer data-aos="fade-up">
              <FooterLogo src="/logo.png" />
            </FooterLogoContainer>

            <FooterContactInfo>
              <FooterContactInfoTitle data-aos="fade-up">
                Contact us
              </FooterContactInfoTitle>
              <p data-aos="fade-up">
                8181 West Broward Blvd, Suite 258 Plantation, <br />
              </p>
              <p data-aos="fade-up">Florida 33324 Office:</p>
              <p data-aos="fade-up">(954) 361-4210 info@abacus-adv.com</p>
            </FooterContactInfo>
          </div>
          <hr />
        </>
      )}

      <div className="container">
        <FooterMenu>
          {MENU_ITEMS.slice(0, 3).map((item) => (
            <FooterMenuItem key={item?.route}>
              <Link href={item?.route}>{item?.title}</Link>
            </FooterMenuItem>
          ))}
        </FooterMenu>

        <FooterMenu>
          {MENU_ITEMS.slice(3, 5).map((item) => (
            <FooterMenuItem key={item?.route}>
              <Link href={item?.route}>{item?.title}</Link>
            </FooterMenuItem>
          ))}
        </FooterMenu>
      </div>

      <hr />

      <FooterCopyRightContainer>
        <FooterCopyRightText>
          Copyright © 2024 Abacus Capital Advisors, LLC
        </FooterCopyRightText>
        <FooterCopyRightText>
          website development by Upsites
        </FooterCopyRightText>
      </FooterCopyRightContainer>
    </FooterContainer>
  );
};

export default Footer;
