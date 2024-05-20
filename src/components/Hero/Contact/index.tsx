import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import {  Text } from '../About';

const circleAnimation = keyframes`

  0% {
    transform: rotate(0deg)
  }


  100% {
        transform: rotate(360deg)
  }

`;

const HeroContactContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  padding: 30px 0 160px 0;
  ${HORIZONTAL_SPACE}
  height: 500px;
  display: flex;
  justify-content: space-between;

  .left-bar {
    top: 0;
    width: 1px;
    height: 120%;
    position: absolute;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.2;
    left: 200px;

    @media (max-width: 1600px) {
      left: 50px;
    }
  }

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
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
  margin-bottom: 18px;
`;

const LinksItem = styled.p`
  color: ${COLORS.text};
  font-weight: 300;
  font-size: 24px;
  text-decoration: underline;
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
  top: 0;
`;

const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/contact-hero.svg');
  background-size: cover;
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`;

const IllustrationSmallCircle = styled.div`
  width: 346px;
  height: 346px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  border: 1px solid gray;
  transform: translateY(90px) translateX(-90px);
  z-index: 5;

  .up-icon {
    position: absolute;
    left: -3%;
    top: 0;
    margin: 25%;
  }
`;

const IllustrationCircleAnimated = styled.div`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #46785c, rgb(0, 0, 0, 0.3));
  transform: rotate(-80deg);
`;

const IllustrationCuttedCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: #46785c;
  background: radial-gradient(
    53.45% 53.45% at 50% 0%,
    rgba(255, 255, 255, 0) 0%,
    ${COLORS.navbarHero} 160%
  );
  animation: ${circleAnimation} 2s infinite linear;

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`;

const IllustrationLine = styled.div`
  width: 1px;
  height: 1000px;
  background-color: #fff;
  transform: translateY(-225px) rotate(42deg);
  position: absolute;
  top: 0;
  opacity: 0.7;
`;

const IllustrationText = styled.p`
  max-width: 250px;
  font-size: 13px;
  font-weight: 300;
  padding: 0 30px;
  color: #fff;
  background: linear-gradient(
    to right,
    #1a4f317d 10%,
    #1a4f31 10%,
    #1a4f31 90%,
    #1a4f317d 90%
  );
  left: -20px;
  position: absolute;
  z-index: 9;
  margin-top: 50px;

  span {
    color: #1a4f31;
    background-color: #fff;
  }
`;

const HeroContact = () => {
  return (
    <HeroContactContainer>
      <div className="left-bar" />
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
  );
};

export default HeroContact;
