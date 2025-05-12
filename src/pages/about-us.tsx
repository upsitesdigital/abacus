import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import HeroAbout from './../components/Hero/About';
import { ModalTeam, Person } from './../components/Modal';
import { HORIZONTAL_SPACE, PADDINGS } from './../utils/constants';

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
  flex-direction: row;
  background-image: url('/text-section-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* height: 488px; */

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 750px) {
    background-color: #fff;
    background-image: none;
    height: auto;
    padding-top: 65px;
    padding-bottom: 45px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  border-bottom: 1px solid #c5c5c5;

  ${HORIZONTAL_SPACE}

  .text-card {
    display: flex;
    gap: 56px;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 101px;
    padding-bottom: 120px;

    &:first-child {
      border-right: 1px solid #c5c5c5;
      padding-right: 94px;
    }

    &:last-child {
      padding-left: 94px;
    }

    @media (max-width: 1360px) {
      &:first-child {
        padding-right: 50px;
      }

      &:last-child {
        padding-left: 50px;
      }
    }

    @media (max-width: 950px) {
      padding-top: 50px;
      padding-bottom: 50px;

      &:first-child {
        padding-right: 0;
        border: none;
        border-bottom: 1px solid #c5c5c5;
      }

      &:last-child {
        padding-left: 0;
      }
    }

    img {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h3 {
      padding-top: 18px;
      font-size: 22px;
      font-weight: 500;
      color: #000;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      color: #000;
      margin-top: 49px;
      margin-bottom: 48px;
    }

    a {
      font-size: 18px;
      font-weight: 300;
      color: #46785c;
    }
  }
`;

const TextSection = styled.p`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  line-height: 50.4px;
  max-width: 90%;
  margin: 0 auto;
  max-width: 1124px;

  @media (max-width: 750px) {
    font-size: 22px;
    line-height: 30.05px;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 500px) {
    text-align: left;
    max-width: 100%;
    width: 100%;
  }
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

  @media (max-width: 1190px) {
    padding-bottom: 103px;
    padding: 63px 24px 103px 24px;
  }

  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

const GalleryInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1124px;

  @media (max-width: 1190px) {
    max-width: 100%;
    width: 100%;
  }
`;

const GalleryTitle = styled.h2`
  width: 100%;
  max-width: 1140px;
  font-size: 32px;
  font-weight: 400;

  @media (max-width: 1190px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
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

  @media (max-width: 1195px) {
    max-width: 100%;
    width: 100%;
    /* grid-template-columns: repeat(2, 40%); */
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
`;

const GalleryCard = styled.div`
  border: 1px solid #d9d9d9;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1195px) {
    padding: 28px;
  }
`;

const GalleryCardPic = styled.div`
  width: 452px;
  height: 262px;
  background-size: cover;
  background-position: 10% 10%;
  margin-bottom: 47px;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    margin-bottom: 27px;
    background-position: 15px;
  }

  @media (max-width: 550px) {
    background-position-x: -40px;
  }

  @media (max-width: 375px) {
    height: 157.05px;
  }
`;

const GalleryCardName = styled.p`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`;

const GalleryCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

    transition: 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 700px) {
    p {
      font-size: 14px;
    }
    margin-bottom: 9px;

    img {
      width: 15px;
      height: 14px;
      margin-right: 14px;
    }
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
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
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

  @media (max-width: 1190px) {
    display: none;
  }

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
    linkdin: 'https://www.linkedin.com/in/mauro-ferman-744a731/',
    skills: [
      'B.A. Economics - Tufts University',
      'MBA - Tuck School of Business at Dartmouth College',
    ],
    text: `Mauro is the founding partner at Abacus Capital Advisors and serves as the firm's CEO. With over 21 years of portfolio management and research experience, Mauro has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra. His most recent position was a senior member at a $10B multi-family office located in Miami, FL.`,
  },
  {
    pic: '/lerroi.png',
    shortTitle: 'Portfolio Manager',
    title: 'Portfolio Manager',
    name: 'William P. Smythe',
    linkdin: 'https://www.linkedin.com/in/wsmythe/',
    skills: [
      'B.A. Economics – Case Western Reserve University',
      'Masters:  Finance – MIT Sloan School of Management',
    ],
    text: `Will is a portfolio manager at Abacus Capital Advisors and serves as the PM of the Alpha Prime Equity strategy at the firm. With over 10 years of experience, Will founded Alpha Prime Capital and has also worked at The Glenmede Trust Company as a Portfolio Manager.`,
  },
  {
    pic: '/jarvis.png',
    shortTitle: 'Business Development - Sports ',
    title: 'Business Development - Sports',
    name: 'Jarvis Johnson',
    linkdin: 'https://www.linkedin.com/in/j-johnson-m-s-7a692a140/',
    skills: [
      'B.A. Administration of Justice - Rutgers University',
      'M.S. - Counseling - Tiffin University',
    ],
    text: `Jarvis Johnson: Jarvis is solicitor for the firm with a focus on sport clients. With over 15 years of experience in the sports industry, Jarvis played professionally in the N.F.L. for the Baltimore Ravens, coached in the NCAA, worked with over 700 plus former, current and retired N.F.L. players. Currently, Jarvis is an Entrepreneur, Film Producer and provides Business Development with the N.F.L. Alumni Association.`,
  },

  {
    pic: '/joel.png',
    shortTitle: 'Business Development - Panama',
    title: 'Business Development - Panama',
    name: 'Joel Moran',
    linkdin: 'https://www.linkedin.com/in/joel-moran-121776123/',
    skills: ['International Business - Universidad Latina de Panamá'],
    text: `Joel is a Panamanian Investment Advisor with 15 years of experience. He is currently working as a business development professional for the firm soliciting clients from Spanish speaking South American countries 
          <br/><br/>
          He previously worked at HSBC Private Bank, Prival Bank, and most recently at Singular Wealth Management.`,
  },
  {
    pic: '/roy.jpg',
    shortTitle: 'Financial Advisor',
    title: 'Financial Advisor',
    name: 'Roy (Todd) Humphrey',
    linkdin: 'https://www.linkedin.com/in/roy-todd-h-95234687/',
    skills: [
      'B.S. – Biological Sciences – Louisiana State University',
      'MBA – Pepperdine University',
    ],
    text: `Roy is a Financial Advisor at Abacus Capital Advisors. He has worked as a Financial Advisor at Singer Wealth Advisors and most recently at Equitable Advisors. Prior to becoming a Financial Advisor, he was a proprietary trader at the NYC-based firm, WTS.`,
  },
  {
    pic: '/benjamin-martin.webp',
    shortTitle: 'Financial Advisor',
    title: 'Financial Advisor',
    name: 'Benjamin Martin',
    linkdin: 'https://www.linkedin.com/in/ben-martin-60b935219/',
    skills: ['B.A. Biopsychology - Tufts University', 'MBA - Loyola Marymount'],
    text: `Ben is a Financial Advisor at Abacus Capital Advisors, He worked as a financial consultant for 18 years for many of the Fortune 500 companies such as Walt Disney, Warner Brothers, 20th Century Fox and NBC/Universal, before transitioning to a financial advisory role 3 years ago.`,
  },
  {
    pic: '/rodrigo.jpg',
    shortTitle: 'Operations',
    title: 'Operations',
    name: 'Rodrigo Carvalho',
    linkdin:
      'https://www.linkedin.com/in/rodrigo-carvalho-de-ara%C3%BAjo-61748b26/',
    skills: ['Master Degree - Accounting', 'MBA of Controllership'],
    text: `Rodrigo is a Brazilian with over 25 years of experience in the financial sector. He has lived in the USA for 5 years and currently works as a business development professional for the company, attracting Brazilian clients.Previously, he worked in Brazil for 18 years at the Pension Fund - FUNCEF and in the USA at BB Americas and, more recently, at Bradesco Bank.`,
  },
];

export default function AboutUs() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <>
      <Head>
        <title>About Us | Abacus</title>
        <meta
          property="og:description"
          content="Learn about Abacus Capital Advisors, our team and our services providing exceptional wealth management and financial services."
        />
        <meta name="keywords" content="About Us" />
      </Head>
      <HeroAbout />
      <Container>
        <ModalTeam
          data={selectedPerson}
          handleClose={() => setSelectedPerson(null)}
        />

        <TextSectionContainer>
          <div className="text-card">
            <img src="/money-1.svg" />
            <div>
              <h3>Portfolio Management</h3>
              <p>
                Real-time monitoring, research driven investment portfolio
                construction.
              </p>
              <Link href="/portfolio-management">More</Link>
            </div>
          </div>
          <div className="text-card">
            <img src="/family-1.svg" />
            <div>
              <h3>Family Office</h3>
              <p>
                Comprehensive private client services and support for all our
                families.
              </p>
              <Link href="/family-office-services">More</Link>
            </div>
          </div>
        </TextSectionContainer>
        <GalleryContainer>
          <AboutIllustrationBackground>
            <div className="circle" />
            <div className="line" />
          </AboutIllustrationBackground>

          <GalleryInnerContainer>
            <GalleryTitle>Team</GalleryTitle>
            <Gallery>
              {teamData.map((item, index) => (
                <GalleryCard
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  key={item.name}
                >
                  <GalleryCardPic
                    className={`pic${index}`}
                    style={{ backgroundImage: `url(${item.pic})` }}
                  />
                  <GalleryCardName>{item.name}</GalleryCardName>
                  <GalleryCardTitle>
                    <Link target="_blank" href={item.linkdin}>
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
