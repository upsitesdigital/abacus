import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';
import { HeroDefaultContainer, LeftBar } from '..';
import { useMediaQuery } from '~/hooks/use-media-query';

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

  @media (max-width: 1000px) {
    padding-bottom: 200px;
  }

  @media (max-width: 850px) {
    padding-bottom: 350px;
    padding-top: 58px;
  }

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 419px;
    display: none;

    @media (max-width: 750px) {
      display: block;
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
  font-size: 46px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 850px;
    font-size: 40;
    line-height: 55.84px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 35px;
  }

  @media (max-width: 1500px) {
    font-size: 30px;
    max-width: 600px;
    line-height: 43px;
  }

  @media (max-width: 1000px) {
    max-width: 290px;
    width: 100%;
    font-size: 24px;
    line-height: 30px;
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
  max-width: 790px;
  line-height: 36px;

  @media (max-width: 1180px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 400px;
  }

  @media (max-width: 850px) {
    font-size: 14px;
    max-width: 323px;
    width: 100%;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 67px;
  list-style: none;
  gap: 20px;

  @media (max-width: 850px) {
    margin-top: 56px;
  }
`;

export const LinksItem = styled.p`
  transition: 0.5s;

  a {
    color: ${COLORS.text};
    font-weight: 400;
    font-size: 24px;
    text-decoration: underline;
    transition: 0.5s;
    width: 250px;
  }

  &:hover {
    transform: scale(1.05);
  }

  a:hover {
    color: #fff;
  }
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
  background-position-y: -50px;
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

  @media (max-width: 1080px) {
    transform: scale(0.7);
    right: -20%;
  }

  @media (max-width: 900px) {
    transform: scale(0.7);
    right: -23%;
  }
`;

const HeroAbout = () => {
  const { width } = useMediaQuery();
  const isMobile = width <= 850;

  return (
    <>
      <HeroAboutContainer>
        <LeftBar />
        <div className="HeroAbout-text-container">
          <div>
            <SubTitle
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              About us
            </SubTitle>
            <HeroAboutTitle
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Abacus was established in 2020, in order to level the playing
              field and provide an objective, low cost, performance-focused
              investment management services for high-net-worth families.
            </HeroAboutTitle>
            <Text data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              {!isMobile
                ? 'Mauro Ferman, in his 21+ years of investment experience, including working with $100M families, started the firm as an alternative to the large banks that provided sub-par, high cost, investment advice, as the private wealth banking system was designed to financially incentivize bankers to choose investments not based upon what is best for the client, but what is best for the advisor. '
                : 'Asset management capabilities with a research-driven approach allowing us to build customized investment portfolios.'}
            </Text>
          </div>
          <Links data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <LinksItem>
              <Link href="/contact-us">Contact Us</Link>
            </LinksItem>
          </Links>
        </div>
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="hero-mobile-bg"
          src="/hero-about-bg.png"
          alt=""
        />
      </HeroAboutContainer>
      <HeroDefaultContainer>
        <CircleAnimationRight
          data-aos="zoom-in"
          className="animation-circle-right"
        >
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
      </HeroDefaultContainer>
    </>
  );
};

export default HeroAbout;
