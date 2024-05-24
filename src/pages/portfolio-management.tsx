import Head from 'next/head';
import styled from 'styled-components';
import HeroPortfolio from '~/components/Hero/Portfolio';
import {
  PortfolioCardContainer,
  PortfolioCardHeader,
  PortfolioCardIcon,
  PortfolioCardText,
  PortfolioCardTitle,
} from '~/components/PortfolioManagement/Card/styles';
import { HORIZONTAL_SPACE, PADDINGS } from '~/utils/constants';
import CustomizationIcon from '~/assets/svgs/customization.svg';
import TransparencyIcon from '~/assets/svgs/transparency.svg';
import RiskIcon from '~/assets/svgs/risk-management.svg';
import CoastIcon from '~/assets/svgs/cost.svg';

import AssetsIcon from '~/assets/svgs/assets.svg';
import EquityIcon from '~/assets/svgs/equities.svg';
import FixedIncomeIcon from '~/assets/svgs/fixed-income.svg';
import AlternativesIcon from '~/assets/svgs/alternatives.svg';
import PublicMarketIcon from '~/assets/svgs/public-market.svg';
import LiquidityManagementIcon from '~/assets/svgs/liquidity.svg';
import PrivateMarketIcon from '~/assets/svgs/cost.svg';
import PrivateCreditIcon from '~/assets/svgs/private-credit.svg';
import RealStateIcon from '~/assets/svgs/real-state.svg';
import CoInvestmentIcon from '~/assets/svgs/co-investments.svg';
import DirectInvestmentIcon from '~/assets/svgs/direct-investments.svg';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.div`
  height: 233px;
  width: 100%;
  background-image: url('/portfolio-section-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  ${HORIZONTAL_SPACE};
  padding-top: 138px;

  @media (max-width: 800px) {
    background-image: none;
    padding: 75px 24px 45px 24px;
    height: auto;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 300;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

const PortfolioBenefitsContainer = styled.div`
  border-top: 1px solid #c5c5c5;

  @media (max-width: 800px) {
    border: none;
  }
`;

const PortfolioBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const PortfolioBenefitsItem = styled.li`
  border-right: 1px solid #c5c5c5;
  padding: 40px;
  padding-bottom: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 365px;

  &:first-child {
    border-right: 1px solid #c5c5c5;
    border-left: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    padding-left: ${PADDINGS.maxSpace}px;

    @media (max-width: 1800px) {
      padding-left: ${PADDINGS.maxSpace - 80}px;
    }

    @media (max-width: 1650px) {
      padding-left: ${PADDINGS.maxSpace - 150}px;
    }

    @media (max-width: 1500px) {
      padding-left: ${PADDINGS.maxSpace - 200}px;
    }

    @media (max-width: 1360px) {
      padding-left: ${PADDINGS.maxSpace - 250}px;
    }

    @media (max-width: 1300px) {
      padding-left: 70px;
    }
  }

  &:nth-child(2) {
    padding-right: ${PADDINGS.maxSpace}px;

    @media (max-width: 1800px) {
      padding-right: ${PADDINGS.maxSpace - 80}px;
    }

    @media (max-width: 1650px) {
      padding-right: ${PADDINGS.maxSpace - 150}px;
    }

    @media (max-width: 1500px) {
      padding-right: ${PADDINGS.maxSpace - 200}px;
    }

    @media (max-width: 1360px) {
      padding-right: ${PADDINGS.maxSpace - 250}px;
    }

    @media (max-width: 1300px) {
      padding-right: 70px;
    }
  }

  &:nth-child(2) {
    padding-right: ${PADDINGS.maxSpace}px;

    @media (max-width: 1800px) {
      padding-right: ${PADDINGS.maxSpace - 80}px;
    }

    @media (max-width: 1650px) {
      padding-right: ${PADDINGS.maxSpace - 150}px;
    }

    @media (max-width: 1500px) {
      padding-right: ${PADDINGS.maxSpace - 200}px;
    }

    @media (max-width: 1360px) {
      padding-right: ${PADDINGS.maxSpace - 250}px;
    }

    @media (max-width: 1300px) {
      padding-right: 70px;
    }
  }

  &:nth-child(3) {
    padding-left: ${PADDINGS.maxSpace}px;

    @media (max-width: 1800px) {
      padding-left: ${PADDINGS.maxSpace - 80}px;
    }

    @media (max-width: 1650px) {
      padding-left: ${PADDINGS.maxSpace - 150}px;
    }

    @media (max-width: 1500px) {
      padding-left: ${PADDINGS.maxSpace - 200}px;
    }

    @media (max-width: 1360px) {
      padding-left: ${PADDINGS.maxSpace - 250}px;
    }

    @media (max-width: 1300px) {
      padding-left: 70px;
    }
  }

  &:last-child {
    border-top: 1px solid #c5c5c5;
    padding-right: ${PADDINGS.maxSpace}px;

    @media (max-width: 1800px) {
      padding-right: ${PADDINGS.maxSpace - 80}px;
    }

    @media (max-width: 1650px) {
      padding-right: ${PADDINGS.maxSpace - 150}px;
    }

    @media (max-width: 1500px) {
      padding-right: ${PADDINGS.maxSpace - 200}px;
    }

    @media (max-width: 1360px) {
      padding-right: ${PADDINGS.maxSpace - 250}px;
    }

    @media (max-width: 1300px) {
      padding-right: 70px;
    }
  }

  @media (max-width: 800px) {
    &:first-child,
    &:nth-child(2),
    &:nth-child(3),
    &:last-child {
      padding: 32px 0;
      border: none;
      border-top: 1px solid #c5c5c5;
    }
  }
`;

const InvestmentContainer = styled.div`
  width: 100%;
  padding-top: 161px;
  background-color: #f8f8f8;
  padding-bottom: 208px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    padding-top: 75px;
    padding-bottom: 81px;
  }
`;

const InvestmentInnerContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  @media (max-width: 1300px) {
    max-width: 100%;
    width: 100%;
    padding-left: 70px;
    padding-right: 70px;
  }

  @media (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 750px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const InvestmentTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 750px) {
    margin-bottom: 32px;
    font-size: 24px;
  }
`;

const InvestmentText = styled.p`
  font-size: 20px;
  font-weight: 300;
  max-width: 608px;

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const InvestmentGrid = styled.div`
  width: 100%;
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(3, 258px);
  gap: 26px;
  max-width: 1124px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 258px);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 258px);
  }

  @media (max-width: 750px) {
    margin-top: 57px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(11, 258px);
  }

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const InvestmentCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 28px;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 380px) {
    width: 260px;
    height: 258px;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const InvestmentCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  align-self: flex-start;
  justify-self: flex-start;
  width: 100%;
`;

export const PORTFOLIO_ITEMS = [
  {
    icon: <CustomizationIcon />,
    title: 'Customization',
    text: 'Our portfolios are highly customizable to meet our client’s long-term investment objectives. We can tailor each portfolio to meet the client’s liquidity needs, income distribution and other necessities that can be modified at any given time.',
  },
  {
    icon: <TransparencyIcon />,
    title: 'Transparency',
    text: 'Our individual security selection allows our clients to follow with the uttermost transparency the daily evolution of the investment portfolio. Our clients are not limited to a fund NAV price but instead can see the daily evolution in the price of each individual bond and equity.',
  },
  {
    icon: <CoastIcon />,
    title: 'Cost',
    text: 'By eliminating expensive management fees associated with funds and ETFs, we remove a layer of fees that clients are normally charged by traditional wealth managers and banks.',
  },
  {
    icon: <RiskIcon />,
    title: 'Risk Management',
    text: 'Our individual security selection approach allows better risk management as different parts of the portfolio can be rapidly adapted to different market conditions and cycles.',
  },
];

const investments = [
  {
    title: 'Real Assets',
    icon: <AssetsIcon />,
  },
  {
    title: 'Equities',
    icon: <EquityIcon />,
  },
  {
    title: 'Fixed Income',
    icon: <FixedIncomeIcon />,
  },
  {
    title: 'Alternatives',
    icon: <AlternativesIcon />,
  },
  {
    title: 'Public Markets',
    icon: <PublicMarketIcon />,
  },
  {
    title: 'Liquidity Management',
    icon: <LiquidityManagementIcon />,
  },
  {
    title: 'Private Markets',
    icon: <PrivateMarketIcon />,
  },
  {
    title: 'Private Credit',
    icon: <PrivateCreditIcon />,
  },
  {
    title: 'Real Estate',
    icon: <RealStateIcon />,
  },
  {
    title: 'Co-Investments',
    icon: <CoInvestmentIcon />,
  },
  {
    title: 'Direct Investments',
    icon: <DirectInvestmentIcon />,
  },
];

export default function PortfolioManagement() {
  return (
    <>
      <Head>
        <title>Portfolio Management | Abacus</title>
        <meta
          property="og:description"
          content="Discover portfolio management. Showcasing our expertise in investment management and wealth growth strategies. Be part of our sucessfull clients."
        />
        <meta name="keywords" content="Our Portfolio" />
      </Head>
      <HeroPortfolio />
      <Container>
        <Header>
          <Title>Benefits and advantages</Title>
        </Header>
        <PortfolioBenefitsContainer>
          <PortfolioBenefitsGrid>
            {PORTFOLIO_ITEMS.map((item) => (
              <PortfolioBenefitsItem key={item.title}>
                <PortfolioCardHeader style={{ marginBottom: '100px' }}>
                  <PortfolioCardTitle>{item.title}</PortfolioCardTitle>
                  <div>{item.icon}</div>
                </PortfolioCardHeader>
                <PortfolioCardText className="card-text">
                  {item.text}
                </PortfolioCardText>
              </PortfolioBenefitsItem>
            ))}
          </PortfolioBenefitsGrid>
        </PortfolioBenefitsContainer>

        <InvestmentContainer>
          <InvestmentInnerContainer>
            <InvestmentTitle>Investment Products</InvestmentTitle>
            <InvestmentText>
              Our research-driven investment process draws on opportunities
              across public and private markets.
            </InvestmentText>
            <InvestmentGrid>
              {investments.map((item) => (
                <InvestmentCard key={item.title}>
                  <InvestmentCardTitle>{item.title}</InvestmentCardTitle>
                  <div className="svg-icon"> {item.icon}</div>
                </InvestmentCard>
              ))}
            </InvestmentGrid>
          </InvestmentInnerContainer>
        </InvestmentContainer>
      </Container>
    </>
  );
}
