import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import { IllustrationContainer, Links, LinksItem } from '../About';
import { HeroDefaultContainer, LeftBar } from '..';

const HeroPorfolioContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 163px;

  @media (max-width: 800px) {
    padding-top: 58px;
    padding-bottom: 320px;
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
    right: -4%;
  }

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 575px;
    display: none;

    @media (max-width: 1050px) {
      display: block;
    }
  }
`;

const HeroAboutTitle = styled.p`
  width: 860px;
  color: ${COLORS.white};
  font-weight: 300;
  font-size: 46px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 40px;
    line-height: 45px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 35px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 28px;
    line-height: 38.25px;
    max-width: 340px;
    width: 100%;
    text-align: left;
  }
`;

const SubTitle = styled.h1`
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
  max-width: 830px;
  text-align: justify;
  line-height: 36px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 18px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 16px;
    line-height: normal;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    line-height: 30px;
  }

  @media (max-width: 1180px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 850px) {
    font-size: 14px;
    max-width: 323px;
    width: 100%;
    text-align: left;
  }
`;

export const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/skyscrapper.webp');
  background-size: cover;
  background-position-y: -60px;
  background-position-x: 70%;
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
    background-image: url('/circle-bg.png');
  }

  .innerSmallCircle {
    width: 118px;
    height: 118px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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
  background: linear-gradient(0deg, #46785c, rgb(0, 0, 0, 0.9));
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
  background: radial-gradient(
    50% 60% at 0% 0%,
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
  right: -15%;

  @media (max-width: 1350px) {
    transform: scale(0.7);
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

const HeroPorfolio = () => {
  return (
    <>
      <HeroPorfolioContainer>
        <LeftBar />
        <div className="HeroAbout-text-container">
          <div>
            <SubTitle data-aos="fade-up">Portfolio Management</SubTitle>
            <HeroAboutTitle data-aos="fade-up">
              Abacus Capital Advisors is a research-driven firm that builds and
              monitors investment portfolios for entrepreneurs and high
              net worth families.
            </HeroAboutTitle>
            <Text data-aos="fade-up">
              With our emphasis on research and individual security selection
              instead of utilizing funds and ETFs, our differentiated investment
              strategy presents several advantages to the traditional investment
              model employed by other wealth managers and banks
            </Text>
          </div>
          <Links>
            <LinksItem>
              <Link href="/contact-us">Contact Us</Link>
            </LinksItem>
          </Links>
        </div>
        <img
          className="hero-mobile-bg"
          src="/hero-mobile-portfolio.png"
          alt=""
        />
      </HeroPorfolioContainer>
      <HeroDefaultContainer>
        <CircleAnimationRight data-aos="zoom-in">
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
                    <img src="/money.svg" alt="" />
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
      </HeroDefaultContainer>
    </>
  );
};

export default HeroPorfolio;
