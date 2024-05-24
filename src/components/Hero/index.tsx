import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE, MENU_ITEMS } from '~/utils/constants';

/* styles.css */

export const LeftBar = styled.div`
  top: 0;
  width: 1px;
  height: 105%;
  position: absolute;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.2;
  left: 234px;

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

  @media (max-width: 1200px) {
    display: none;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 99px;
  padding-bottom: 189px;

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 346px;
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  .hero-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 4;

    .IllustrationText-mobile {
      display: none;
    }

    @media (max-width: 750px) {
      height: auto;

      .IllustrationText-mobile {
        max-width: 171px;
        font-size: 17px;
        font-weight: 400;
        color: #fff;
        margin-top: 69px;
        display: block;

        span {
          color: #1a4f31;
          background-color: #fff;
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding-top: 58px;
    padding-bottom: 104px;
  }
`;

const CircleAnimationRight = styled.div`
  position: absolute;
  right: -15%;

  @media (max-width: 1050px) {
    transform: scale(0.7);
    right: -20%;
  }

  @media (max-width: 900px) {
    transform: scale(0.7);
    right: -23%;
  }
`;

const HeroTitle = styled.div`
  h3 {
    width: 830px;
    color: ${COLORS.white};
    font-weight: 400;
    font-size: 56px;
    line-height: 76.5px;
  }

  img {
    margin-bottom: 58px;

    @media (max-width: 750px) {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1750px) {
    h3 {
      max-width: 800px;
      font-size: 50px;
      line-height: 70px;
    }
  }

  @media (max-width: 1600px) {
    h3 {
      max-width: 700px;
      font-size: 45px;
      line-height: 60px;
    }
  }

  @media (max-width: 1500px) {
    h3 {
      max-width: 550px;
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media (max-width: 750px) {
    h3 {
      width: 100%;
      max-width: 340px;
      font-size: 32px;
      line-height: 43.71px;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 64px;
  margin-top: 272px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    margin-top: 56px;
  }
`;

const LinksItem = styled.li`
  a {
    color: #9fc899;
    font-weight: 300;
    font-size: 24px;
    text-decoration: underline;
  }

  @media (max-width: 1600px) {
    a {
      max-width: 700px;
      font-size: 20;
    }
  }
`;

const IllustrationContainer = styled.div`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/arranha-ceus-de-aco-eletrico-business-metal-sky 1.webp');
  background-size: cover;
`;

const IllustrationWordImage = styled.img`
  width: 140.91px;
  height: 140.91px;
`;

const IllustrationBigCircle = styled.div`
  width: 623px;
  height: 623px;
  border-radius: 100%;
  background-image: url('/big-circle-border.png');

  /* @media (max-width: 750px) {
    width: 244px;
    height: 244px;
  } */
`;

const IllustrationSmallCircle = styled.div`
  width: 346px;
  height: 346px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  transform: translateY(90px) translateX(-90px);
  z-index: 5;
  background-image: url('/border-radius.png');

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
  height: 1500px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-450px) rotate(41deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`;

const IllustrationText = styled.p`
  max-width: 184px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 30px;
  color: #fff;
  position: absolute;
  z-index: 9;
  margin-top: 50px;

  span {
    color: #1a4f31;
    background-color: #fff;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const HeroDefaultContainer = styled.div`
  width: 680px;
  height: 90%;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  top: 113px;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <LeftBar />
        <div className="hero-text-container">
          <HeroTitle data-aos="fade-down">
            <img src="/arrow-up-right-3.svg" />
            <h3>
              Boutique Multi-Family Office focused on helping clients grow their
              wealth responsibly
            </h3>
             
          </HeroTitle>

          <Links>
            <LinksItem data-aos="fade-up">
              <Link href={MENU_ITEMS[1].route}>Portfolio Management</Link>
            </LinksItem>
            <LinksItem data-aos="fade-up">
              <Link href={MENU_ITEMS[MENU_ITEMS.length - 1].route}>
                Contact Us
              </Link>
            </LinksItem>
          </Links>
          <div className="IllustrationText-mobile" data-aos="fade-up">
            Proudly serving families throughout <span> North and South </span>
            America and <span>Europe</span>
          </div>
        </div>
        <img className="hero-mobile-bg" src="/hero-home-mobile.png" alt="" />
      </HeroContainer>
      <HeroDefaultContainer>
        <CircleAnimationRight>
          <IllustrationContainer>
            <IllustrationBigCircle>
              <IllustrationBg />
            </IllustrationBigCircle>
            <IllustrationSmallCircle>
              <img className="up-icon" src="/up.svg" alt="" />
              <IllustrationWordImage src="/North_America.png" />
            </IllustrationSmallCircle>
            <IllustrationLine />
            <IllustrationCuttedCircle>
              <div className="outer-cirlce" />
            </IllustrationCuttedCircle>
            <IllustrationCircleAnimated></IllustrationCircleAnimated>
          </IllustrationContainer>
          <IllustrationText data-aos="fade-up">
            Proudly serving families throughout <span> North and South </span>
            America and <span>Europe</span>
          </IllustrationText>
        </CircleAnimationRight>
      </HeroDefaultContainer>
    </>
  );
};

export default Hero;
