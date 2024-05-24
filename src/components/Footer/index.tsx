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
import { useMediaQuery } from '~/hooks/use-media-query';

const Footer = ({ isContact = false }: { isContact?: boolean }) => {
  const { width } = useMediaQuery();
  const isMobile = width <= 650;

  const showInfo = !isContact || isMobile

  return (
    <FooterContainer isContact={isContact}>
      {showInfo && (
        <>
          <div className="container container-1">
            <FooterLogoContainer data-aos="fade-up">
              <FooterLogo src="/logo.png" />
            </FooterLogoContainer>

            <FooterContactInfo>
              <FooterContactInfoTitle data-aos="fade-up">
                Contact us
              </FooterContactInfoTitle>
              <p data-aos="fade-up">
                8181 West Broward Blvd, Suite 258 Plantation, Florida 33324
              </p>
              <p data-aos="fade-up">Office: (954) 361-4210</p>
              <a href="mailto:info@abacus-adv.com">
                <p data-aos="fade-up">info@abacus-adv.com</p>
              </a>
            </FooterContactInfo>
          </div>
          <hr className="hr-1" />
        </>
      )}

      <div className="container">
        <FooterMenu>
          {MENU_ITEMS.slice(0, isMobile ? MENU_ITEMS.length : 3).map((item) => (
            <FooterMenuItem key={item?.route}>
              <Link href={item?.route}>{item?.title}</Link>
            </FooterMenuItem>
          ))}
        </FooterMenu>

        {!isMobile && (
          <FooterMenu>
            {MENU_ITEMS.slice(3, 5).map((item) => (
              <FooterMenuItem key={item?.route}>
                <Link href={item?.route}>{item?.title}</Link>
              </FooterMenuItem>
            ))}
          </FooterMenu>
        )}
      </div>

      <hr className="hr-2" />

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
