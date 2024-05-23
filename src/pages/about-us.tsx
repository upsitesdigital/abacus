import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import HeroAbout from '~/components/Hero/About';
import { ModalTeam, Person } from '~/components/Modal';
import { HORIZONTAL_SPACE, PADDINGS } from '~/utils/constants';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('/text-section-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 488px;

  .dash {
    width: 56px;
    height: 1px;
    background-color: #46785c;
    margin-bottom: 51px;
  }

  ${HORIZONTAL_SPACE}
`;

const TextSection = styled.p`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  line-height: 50.4px;
  max-width: 90%;
  margin: 0 auto;
  max-width: 1124px;
`;

const GalleryContainer = styled.div`
  padding-top: 63px;
  padding-bottom: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const GalleryInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1124px;
`;

const GalleryTitle = styled.h2`
  width: 100%;
  max-width: 1140px;
  font-size: 32px;
  font-weight: 400;
`;

const Gallery = styled.ul`
  list-style: none;
  margin-top: 43px;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  gap: 24px;
  width: 100%;
  max-width: 1140px;
  z-index: 5;
`;

const GalleryCard = styled.div`
  border: 1px solid #d9d9d9;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const GalleryCardPic = styled.div`
  width: 452px;
  height: 264px;
  background-size: cover;
  background-position: 10% 10%;
  margin-bottom: 47px;
`;

const GalleryCardName = styled.p`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const GalleryCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 26px;
  margin-bottom: 16px;

  p {
    color: #46785c;
    font-size: 22px;
    font-weight: 400;
  }

  img {
    width: 26px;
    height: 24px;
    margin-right: 24px;
    align-self: flex-end;
  }
`;

const GalleryCardSeeMore = styled.button`
  font-size: 22px;
  font-weight: 600;
  text-decoration: underline;
  color: #46785c;
  border: none;
  outline: none;
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;
`;

export const AboutIllustrationBackground = styled.div`
  width: 800px;
  height: 900px;
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  align-items: flex-start;
  justify-content: center;

  .circle {
    width: 622px;
    height: 622px;
    border-radius: 100%;
    margin-top: 48px;
    border: 2px solid #737373;
    opacity: 0.1;
  }

  .line {
    height: 900px;
    width: 2px;
    opacity: 0.3;
    position: absolute;
    top: -50%;
    background-color: #737373;
    transform: rotate(50deg) translateX(300px);
  }
`;

const teamData: Person[] = [
  {
    pic: '/mauro.png',
    shortTitle: 'CEO & CIO',
    name: 'Mauro Ferman',
    title:
      "Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",
    linkdin: 'www.google.com',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `With over 20 years of portfolio management and research experience,
          Mr. Ferman has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra.
          <br/><br/>
          His most recent position was a senior member at CV Advisors, a 10B
          multi-family office located in Miami, FL.`,
  },
  {
    pic: '/jarvis.png',
    shortTitle: 'CEO & CIO',
    title:
      "Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",
    name: 'Jarvis Johnson',
    linkdin: 'www.google.com',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `With over 20 years of portfolio management and research experience,
          Mr. Ferman has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra.
          <br/><br/>
          His most recent position was a senior member at CV Advisors, a 10B
          multi-family office located in Miami, FL.`,
  },
  {
    pic: '/lerroi.png',
    shortTitle: 'CEO & CIO',
    title:
      "Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",
    name: 'Leroi Sanchez',
    linkdin: 'www.google.com',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `With over 20 years of portfolio management and research experience,
          Mr. Ferman has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra.
          <br/><br/>
          His most recent position was a senior member at CV Advisors, a 10B
          multi-family office located in Miami, FL.`,
  },
  {
    pic: '/william.png',
    shortTitle: 'CEO & CIO',
    title:
      "Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",
    name: 'William P. Smythe',
    linkdin: 'www.google.com',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `With over 20 years of portfolio management and research experience,
          Mr. Ferman has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra.
          <br/><br/>
          His most recent position was a senior member at CV Advisors, a 10B
          multi-family office located in Miami, FL.`,
  },
  {
    pic: '/joel.png',
    shortTitle: 'CEO & CIO',
    title:
      "Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",
    name: 'Joel Moran',
    linkdin: 'www.google.com',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `With over 20 years of portfolio management and research experience,
          Mr. Ferman has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra.
          <br/><br/>
          His most recent position was a senior member at CV Advisors, a 10B
          multi-family office located in Miami, FL.`,
  },
];

export default function AboutUs() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <>
      <HeroAbout />
      <Container>
        <ModalTeam
          data={selectedPerson}
          handleClose={() => setSelectedPerson(null)}
        />

        <TextSectionContainer>
          <div className="dash" />
          <TextSection>
            We understand that families have other necessities beyond financial
            returns and we complement our portfolio management with client
            private services allowing us to holistically service our families
            with other necessities such as real estate acquisition, asset
            protection, accounting support and any other services our families
            may need.
          </TextSection>
        </TextSectionContainer>
        <GalleryContainer>
          <AboutIllustrationBackground>
            <div className="circle" />
            <div className="line" />
          </AboutIllustrationBackground>

          <GalleryInnerContainer>
            <GalleryTitle>Team</GalleryTitle>
            <Gallery>
              {teamData.map((item) => (
                <GalleryCard key={item.name}>
                  <GalleryCardPic
                    style={{ backgroundImage: `url(${item.pic})` }}
                  />
                  <GalleryCardName>{item.name}</GalleryCardName>
                  <GalleryCardTitle>
                    <Link href={item.linkdin}>
                      <img src="/linkdin.svg" />
                    </Link>
                    <p> {item.shortTitle}</p>
                  </GalleryCardTitle>
                  <GalleryCardSeeMore onClick={() => setSelectedPerson(item)}>
                    Read more
                  </GalleryCardSeeMore>
                </GalleryCard>
              ))}
            </Gallery>
          </GalleryInnerContainer>
        </GalleryContainer>
      </Container>
    </>
  );
}
