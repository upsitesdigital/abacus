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
  padding-bottom: 250px;
  overflow: hidden;

  .left-bar {
    top: 0;
    width: 1px;
    height: 105%;
    position: absolute;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );

    opacity: 0.2;
    left: 200px;

    @media (max-width: 1800px) {
      left: 60px;
    }
  }

  .hero-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const CircleAnimationRight = styled.div`
  position: absolute;
  top: 113px;
  right: -5%;
`;

const HeroTitle = styled.h5`
  width: 830px;
  color: ${COLORS.white};
  font-weight: 400;
  font-size: 56px;
  line-height: 76.5px;

  img {
    margin-bottom: 58px;
  }

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

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 272px;
  list-style: none;
  gap: 64px;
`;

const LinksItem = styled.div`
  a {
    color: #9fc899;
    font-weight: 300;
    font-size: 24px;
    text-decoration: underline;
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
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <LeftBar />
        <div className="hero-text-container">
          <HeroTitle data-aos="fade-down">
            <img src="/arrow-up-right-3.svg" />
            <br />A Boutique Multi-Family Office focused on helping clients grow
            their wealth responsibly 
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
        </div>
      </HeroContainer>
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
    </>
  );
};

export default Hero;
