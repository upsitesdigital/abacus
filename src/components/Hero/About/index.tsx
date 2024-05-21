import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import { LeftBar } from '..';

const HeroAboutContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 153px;
  overflow: hidden;

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

  .HeroAbout-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .text {
      font-size: 20px;
      font-weight: 200;
      color: #fff;
      margin-top: 24px;
      width: 710px;
    }
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -5%;
  }
`;

const HeroAboutTitle = styled.p`
  width: 950px;
  color: ${COLORS.white};
  font-weight: 300;
  font-size: 56px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 850px;
    font-size: 50;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 45;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 40;
  }
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
  margin-bottom: 18px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-top: 24px;
  max-width: 650px;
  line-height: 36px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 67px;
  list-style: none;
  gap: 20px;
`;

export const LinksItem = styled.p`
  color: ${COLORS.text};
  font-weight: 400;
  font-size: 24px;
  text-decoration: underline;
`;

export const IllustrationContainer = styled.div`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 20px;
    height: 20px;
    left: -200px;
    bottom: 0;
    transform: rotate(180deg);
    margin-bottom: 60px;
  }
`;

export const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/florida.webp');
  background-size: cover;
  background-position: 30%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerCircleBig {
    width: 346.75px;
    height: 346.75px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    background-image: url('/border-radius.png');
  }

  .innerSmallCircle {
    width: 184px;
    height: 184px;
    border: 2px solid #46785c;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
  }
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`;

const IllustrationCircleAnimated = styled.div`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  transform: rotate(-80deg);
  background-image: url('/big-circle-border.png');
`;

const IllustrationCuttedCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: transparent;
  background: radial-gradient(
    50% 53.45% at 30% 0%,
    rgba(0, 0, 0, 0) 100%,
    ${COLORS.navbarHero} 150%
  );

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
  width: 2px;
  height: 1000px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-200px) rotate(40deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`;

const CircleAnimationRight = styled.div`
  position: absolute;
  top: 113px;
  right: -5%;
`;

const HeroAbout = () => {
  return (
    <>
      <HeroAboutContainer>
        <LeftBar  />
        <div className="HeroAbout-text-container">
          <div>
            <SubTitle>About us</SubTitle>
            <HeroAboutTitle>
              Asset management capabilities with a research-driven approach
              allowing us to build customized investment portfolios.
            </HeroAboutTitle>
            <Text>
              The client&apos;s portfolio is actively managed with a focus on
              capital preservation and real-time decision-making allowing us to
              navigate through ever-changing market conditions.
            </Text>
          </div>
          <Links>
            <LinksItem>
              <Link href="">Contact Us</Link>
            </LinksItem>
          </Links>
        </div>
      </HeroAboutContainer>{' '}
      <CircleAnimationRight className="animation-circle-right">
        <IllustrationContainer>
          <div
            style={{
              width: '20px',
              height: '20px',
              position: 'absolute',
              left: '-90px',
              bottom: 0,
              transform: 'rotate(180deg)',
              marginBottom: '60px',
            }}
          >
            <img src="/up.svg" alt="" />
          </div>
          <IllustrationLine />
          <IllustrationBigCircle>
            <IllustrationBg>
              <div className="innerCircleBig">
                <div className="innerSmallCircle">
                  <img src="/abacus-empty.svg" alt="" />
                </div>
              </div>
            </IllustrationBg>
          </IllustrationBigCircle>
          <IllustrationCuttedCircle>
            <div className="outer-cirlce" />
          </IllustrationCuttedCircle>
          <IllustrationCircleAnimated></IllustrationCircleAnimated>
        </IllustrationContainer>
      </CircleAnimationRight>
    </>
  );
};

export default HeroAbout;
