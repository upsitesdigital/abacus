import { styled } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';

export const FooterContainer = styled.footer`
  background-color: ${COLORS.navbarHero};
  background-image: url('/footer2.png');
  ${HORIZONTAL_SPACE};
  padding-top: 136px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  hr {
    background-color: #ffffff;
    opacity: 0.3;
    height: 1px;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const FooterLogoContainer = styled.div``;

export const FooterLogo = styled.img``;

export const FooterContactInfoTitle = styled.h2`
  color: ${COLORS.white};
  font-size: 32px;
  font-weight: 400;
`;

export const FooterContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  p {
    color: ${COLORS.white};
    font-size: 22px;
    font-weight: 300;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
`;

export const FooterMenuItem = styled.li`
  color: ${COLORS.white};
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCopyRightText = styled.p`
  color: ${COLORS.white};
  font-size: 14px;
  font-weight: 300;
`;
