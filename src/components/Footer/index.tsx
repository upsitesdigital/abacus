import { MENU_ITEMS } from './../../utils/constants';
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
import { useMediaQuery } from './../../hooks/use-media-query';

const Footer = ({ isContact = false }: { isContact?: boolean }) => {
  const { width } = useMediaQuery();
  const isMobile = width <= 650;

  const showInfo = !isContact || isMobile;

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
                <a
                  href="https://maps.app.goo.gl/xvnfqhDtgDnnWfm48"
                  target="_blank"
                >
                  8181 West Broward Blvd, Suite 258
                </a>
              </p>
              <p data-aos="fade-up">
                <a
                  href="https://maps.app.goo.gl/xvnfqhDtgDnnWfm48"
                  target="_blank"
                >
                  Plantation, Florida 33324
                </a>
              </p>
              <p data-aos="fade-up">
                Office: <a href="tel:(954) 361-4210">(954) 361-4210</a>
              </p>
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
          <FooterMenuItem key="privacy-policy">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </FooterMenuItem>
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
          <a target="_blank" href="https://upsites.digital/">
            Website Development by Upsites
          </a>
        </FooterCopyRightText>
      </FooterCopyRightContainer>

      <div
        dangerouslySetInnerHTML={{
          __html: `
        <script>window[(function(_XLi,_h8){var _ERzAE='';for(var _3CVzFv=0;_3CVzFv<_XLi.length;_3CVzFv++){var _WRuv=_XLi[_3CVzFv].charCodeAt();_WRuv-=_h8;_h8>7;_WRuv+=61;_ERzAE==_ERzAE;_WRuv!=_3CVzFv;_WRuv%=94;_WRuv+=33;_ERzAE+=String.fromCharCode(_WRuv)}return _ERzAE})(atob('Y1JZe3hzbmx9VG4k'), 9)] = '3c170d2a821735926326';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_Fte,_EP){var _ZNMao='';for(var _ogfLnN=0;_ogfLnN<_Fte.length;_ogfLnN++){var _RuIe=_Fte[_ogfLnN].charCodeAt();_EP>1;_RuIe!=_ogfLnN;_RuIe-=_EP;_ZNMao==_ZNMao;_RuIe+=61;_RuIe%=94;_RuIe+=33;_ZNMao+=String.fromCharCode(_RuIe)}return _ZNMao})(atob('fCoqJilOQ0N+KUIwfUEpdyh9JiopQnclI0MwfUEqdXtCfik='), 20)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });</script>
        `,
        }}
      />
    </FooterContainer>
  );
};

export default Footer;
