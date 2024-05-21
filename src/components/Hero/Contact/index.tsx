import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import { Text } from '../About';

const HeroContactContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
  height: 560px;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top: 63px;
  justify-content: space-between;

  .HeroContact-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -17%;
  }
`;

const HeroContactTitle = styled.p`
  width: 787px;
  color: ${COLORS.white};
  font-weight: 400;
  font-size: 56px;
  margin-top: 72px;
  margin-bottom: 26px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 50px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 45px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 40px;
  }
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
  margin-bottom: 18px;
`;

const IllustrationContainer = styled.div`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -10%;
`;

const IllustrationBg = styled.div`
  width: 622px;
  height: 690px;
  border-radius: 100%;
  background-image: url('/contact-hero.svg');
  background-size: cover;
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`;

export const ContactLine = styled.div`
  top: 0%;
  width: 1px;
  height: 675px;
  position: absolute;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.2;
  left: 200px;
  z-index: 2;

  @media (max-width: 1800px) {
    left: 150px;
  }

  @media (max-width: 1600px) {
    left: 100px;
  }

  @media (max-width: 1400px) {
    left: 70px;
  }

  @media (max-width: 1300px) {
    left: 50px;
  }
`;

const HeroContact = () => {
  return (
    <>
      <ContactLine  />
      <HeroContactContainer>
        <div className="HeroContact-text-container">
          <SubTitle className="subTitle">Contact</SubTitle>
          <HeroContactTitle>Contact us</HeroContactTitle>
          <Text>To learn more about us, please reach out below</Text>
        </div>
        <IllustrationContainer>
          <IllustrationBigCircle>
            <IllustrationBg></IllustrationBg>
          </IllustrationBigCircle>
        </IllustrationContainer>
      </HeroContactContainer>
    </>
  );
};

export default HeroContact;
