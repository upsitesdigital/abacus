import { styled } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';

interface Props {
  isContact: boolean;
}

export const FooterContainer = styled.footer<Props>`
  background-color: ${COLORS.navbarHero};
  background-image: url('/footer2.png');
  background-position: bottom;
  background-repeat: no-repeat;
  ${HORIZONTAL_SPACE};
  padding-top: ${({ isContact }) => (isContact ? '45px' : '136px')};
  padding-bottom: 177px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .hr-1 {
    margin-top: 71px;
    margin-bottom: 45px;

    @media (max-width: 690px) {
      margin-top: 73px;
      margin-bottom: 36px;
    }
  }

  .hr-2 {
    margin-top: 51px;
    margin-bottom: 41px;

    @media (max-width: 690px) {
      margin-bottom: 59px;
      margin-top: 66px;
    }
  }

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
  }

  @media (max-width: 960px) {
    padding-top: 75px;
    padding-bottom: 89px;

    .container-1 {
      flex-direction: column;
    }
  }
`;

export const FooterLogoContainer = styled.div`
  @media (max-width: 960px) {
    margin-bottom: 58px;

    img {
      width: 236px;
      height: auto;
    }
  }
`;

export const FooterLogo = styled.img``;

export const FooterContactInfoTitle = styled.h2`
  color: ${COLORS.white};
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 21px;
`;

export const FooterContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  a {
    transition: .5s;

    &:hover {
      opacity: .8;
    }
  }

  p {
    color: ${COLORS.white};
    font-size: 22px;
    font-weight: 300;
    margin-top: 8px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const FooterMenuItem = styled.li`
  color: ${COLORS.white};
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  transition: .5s;

  &:hover {
    opacity: .7;
    transform: scale(1.05);
  }
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 690px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }
`;

export const FooterCopyRightText = styled.p`
  color: ${COLORS.white};
  font-size: 14px;
  font-weight: 300;
`;
