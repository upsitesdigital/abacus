import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE, MENU_ITEMS } from '~/utils/constants';

/* styles.css */

const fadeIn = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const circleAnimation = keyframes`

  0% {
    transform: rotate(0deg)
  }


  100% {
        transform: rotate(360deg)
  }

`;

const HeroContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.navbarHero};
  padding: 100px 0 160px 0;
  ${HORIZONTAL_SPACE}
  height: 1000px;
  display: flex;
  justify-content: space-between;

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

    @media (max-width: 1600px) {
      left: 50px;
    }
  }

  .hero-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -17%;
  }
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
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  list-style: none;
  gap: 20px;
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
`;

const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/arranha-ceus-de-aco-eletrico-business-metal-sky 1.png');
  background-size: cover;
`;

const IllustrationWordImage = styled.img`
  width: 140.91px;
  height: 140.91px;
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
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
  border-width: 2px;
  border-style: solid;
  border-color: #d2d0d05c;
  border-radius: 100%;
  border-image-slice: 1;
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
  /* opacity: 0; */
  /* animation: ${fadeIn} 2s forwards; */

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
    /* opacity: 0; */
    /* animation: ${fadeIn} 2s forwards; */
    /* animation-delay: 1s; */
  }
`;

const IllustrationLine = styled.div`
  width: 1px;
  height: 1000px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-210px) rotate(41deg);
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

const Hero = () => {
  return (
    <HeroContainer>
      <div className="left-bar" />
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

      <div className="animation-circle-right" style={{ position: 'relative' }}>
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
          Proudly serving families throughout <span>North and South</span>
          America and <span>Europe</span>
        </IllustrationText>
      </div>
    </HeroContainer>
  );
};

export default Hero;
