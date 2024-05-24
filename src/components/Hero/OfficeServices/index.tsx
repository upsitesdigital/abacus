import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import { IllustrationContainer, Links, LinksItem } from '../About';
import { HeroDefaultContainer, LeftBar } from '..';

const HeroOfficeServicesContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 214px;

  @media (max-width: 750px) {
    padding-top: 58px;
    padding-bottom: 300px;
  }

  @media (max-width: 650px) {
    padding-top: 58px;
    padding-bottom: 320px;
  }

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

    .links-div {
      margin-top: 146px;
      z-index: 5;

      @media (max-width: 750px) {
        margin-top: 56px;
      }
    }
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -8%;
  }

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 485px;
    display: none;

    @media (max-width: 1050px) {
      display: block;
    }
  }
`;

const HeroAboutTitle = styled.p`
  width: 1000px;
  color: ${COLORS.white};
  font-weight: 300;
  font-size: 46px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 40px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 35px;
  }

  @media (max-width: 750px) {
    font-size: 28px;
    line-height: 38.25px;
  }

  @media (max-width: 650px) {
    max-width: 340px;
  }

  @media (max-width: 350px) {
    max-width: 100%;
    width: 100%;
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
  max-width: 850px;
  line-height: 36px;

  @media (max-width: 1600px) {
    max-width: 700px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 25.2px;
  }

  @media (max-width: 650px) {
    max-width: 323px;
    width: 100%;
  }

  @media (max-width: 350px) {
    max-width: 100%;
    width: 100%;
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
  background-image: url('/big-circle-border.png');
  transform: rotate(-80deg);
`;

const IllustrationCuttedCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background: radial-gradient(
    70% 60% at 0% 0%,
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

export const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/family.webp');
  background-size: cover;
  background-position-y: -50px;
  background-position-x: -10px;
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

const CircleAnimationRight = styled.div`
  position: absolute;
  right: -15%;

  @media (max-width: 1150px) {
    transform: scale(0.7);
  }

  @media (max-width: 1050px) {
    display: none;
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

const HeroOfficeServices = () => {
  return (
    <>
      <HeroOfficeServicesContainer>
        <LeftBar />
        <div className="HeroAbout-text-container">
          <div>
            <SubTitle data-aos="fade-up">Family Office Services</SubTitle>
            <HeroAboutTitle data-aos="fade-up">
              Comprehensive private client services and support for all our
              families
            </HeroAboutTitle>
            <Text data-aos="fade-up">
              We understand our families have needs beyond the daily investment
              management services. Through our network of partners and
              providers, we can facilitate many other services such as estate
              planning, tax, real estate acquisition, cash management and
              lending.
            </Text>
            <Links>
              <LinksItem className="links-div">
                <Link href="/contact-us">Contact Us</Link>
              </LinksItem>
            </Links>
          </div>
        </div>
        <img className="hero-mobile-bg" src="/hero-mobile-family.png" alt="" />
      </HeroOfficeServicesContainer>
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
                    <img src="/family.svg" alt="" />
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

export default HeroOfficeServices;
