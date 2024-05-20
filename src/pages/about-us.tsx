import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import HeroAbout from '~/components/Hero/About';
import { ModalTeam, Person } from '~/components/Modal';
import { HORIZONTAL_SPACE } from '~/utils/constants';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSectionContainer = styled.section`
  padding: 129px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('/text-section-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;

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
  max-width: 1124px;
  margin: 0 auto;
`;

const GalleryContainer = styled.div`
  ${HORIZONTAL_SPACE}
  padding-top: 59px;
  padding-bottom: 182px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const GalleryTitle = styled.h2`
  width: 100%;
  max-width: 1140px;
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
  gap: 16px;
  background-color: #fff;
`;

const GalleryCardPic = styled.div`
  width: 452px;
  height: 264px;
  margin-bottom: 47px;
  background-size: cover;
  background-position: 10% 10% ;
`;

const GalleryCardName = styled.p`
  font-size: 32px;
  font-weight: 400;
`;

const GalleryCardTitle = styled.p`
  color: #46785c;
  font-size: 22px;

  img {
    width: 26px;
    height: 24px;
    margin-right: 24px;
  }
`;

const GalleryCardSeeMore = styled.button`
  font-size: 22px;
  font-weight: 300;
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
    margin-top: 30px;
    border: 2px solid #737373;
    opacity: 0.3;
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
    pic: '/mauro-fgerman.png',
    shortTitle: 'CEO & CIO',
    name: 'Mauro Ferman',
    title: '',
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
    pic: '/jarvis-johnson.png',
    shortTitle: 'CEO & CIO',
    title: '',
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
    pic: '/leroi-sanchez.png',
    shortTitle: 'CEO & CIO',
    title: '',
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
    pic: '/william-smythe.png',
    shortTitle: 'CEO & CIO',
    title: '',
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
    pic: '/joel-moran.png',
    shortTitle: 'CEO & CIO',
    title: '',
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
                  {item.shortTitle}
                </GalleryCardTitle>
                <GalleryCardSeeMore onClick={() => setSelectedPerson(item)}>
                  Read more
                </GalleryCardSeeMore>
              </GalleryCard>
            ))}
          </Gallery>
        </GalleryContainer>
      </Container>
    </>
  );
}
