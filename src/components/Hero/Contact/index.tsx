import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from './../../../utils/constants';

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

  @media (max-width: 750px) {
    padding-top: 58px;
    height: 405px;
  }

  .HeroContact-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 2;
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

  @media (max-width: 750px) {
    font-size: 28px;
    margin-top: 24px;
  }
`;

const SubTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
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

  @media (max-width: 1050px) {
    margin-right: -20px;
  }
`;

const IllustrationBg = styled.div`
  width: 622px;
  height: 690px;
  border-radius: 100%;
  background-image: url('/contact-hero.svg');
  background-size: cover;

  @media (max-width: 1050px) {
    width: 272px;
    height: 356px;
    position: absolute;
    right: 0;
  
  }
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;

  @media (max-width: 1050px) {
    width: 272px;
    height: 356px;
  }
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

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-top: 26px;
  max-width: 650px;
  line-height: 36px;

  @media (max-width: 690px) {
    font-size: 14px;
    margin-top: 24px;
    max-width: 202px;
    line-height: 25.2px;
  }
`;

const HeroContact = () => {
  return (
    <>
      <ContactLine />
      <HeroContactContainer>
        <div className="HeroContact-text-container">
          <SubTitle className="subTitle" data-aos="fade-up">
            Contact
          </SubTitle>
          <HeroContactTitle data-aos="fade-up">Contact us</HeroContactTitle>
          <Text data-aos="fade-up">
            To learn more about us, please reach out below
          </Text>
        </div>
        <IllustrationContainer data-aos="zoom-in">
          <IllustrationBigCircle>
            <IllustrationBg></IllustrationBg>
          </IllustrationBigCircle>
        </IllustrationContainer>
      </HeroContactContainer>
    </>
  );
};

export default HeroContact;
