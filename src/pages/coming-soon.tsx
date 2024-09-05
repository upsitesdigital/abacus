import Head from 'next/head';
import styled from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from './../utils/constants';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.navbarHero};
  ${HORIZONTAL_SPACE}
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${COLORS.white};
  font-weight: 400;
  font-size: 56px;
  line-height: 76.5px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 50px;
    line-height: 70px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 45px;
    line-height: 60px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 750px) {
    width: 100%;
    max-width: 340px;
    font-size: 32px;
    line-height: 43.71px;
  }
`;

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon | Abacus</title>
        <meta
          property="og:description"
          content="Learn about Abacus Capital Advisors, our team and our services providing exceptional wealth management and financial services."
        />
        <meta name="keywords" content="About Us" />
      </Head>
      <Container>
        <Title>Coming Soon.</Title>
      </Container>
    </>
  );
}
