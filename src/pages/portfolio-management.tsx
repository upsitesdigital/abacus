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
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 300;
`;

const PortfolioBenefitsContainer = styled.div`
  border-top: 1px solid #c5c5c5;
`;

const PortfolioBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;
const PortfolioBenefitsItem = styled(PortfolioCardContainer)`
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
`;

const InvestmentContainer = styled.div`
  width: 100%;
  padding-top: 161px;
  background-color: #f8f8f8;
  padding-bottom: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const InvestmentTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const InvestmentText = styled.p`
  font-size: 20px;
  font-weight: 300;
  max-width: 608px;
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
`;

const InvestmentCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 28px;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
    icon: '/customization.svg',
    title: 'Customization',
    text: 'Our portfolios are highly customizable to meet our client’s long-term investment objectives. We can tailor each portfolio to meet the client’s liquidity needs, income distribution and other necessities that can be modified at any given time.',
  },
  {
    icon: '/transparency.svg',
    title: 'Transparency',
    text: 'Our individual security selection allows our clients to follow with the uttermost transparency the daily evolution of the investment portfolio. Our clients are not limited to a fund NAV price but instead can see the daily evolution in the price of each individual bond and equity.',
  },
  {
    icon: '/cost.svg',
    title: 'Cost',
    text: 'By eliminating expensive management fees associated with funds and ETFs, we remove a layer of fees that clients are normally charged by traditional wealth managers and banks.',
  },
  {
    icon: '/risk-management.svg',
    title: 'Risk Management',
    text: 'Our individual security selection approach allows better risk management as different parts of the portfolio can be rapidly adapted to different market conditions and cycles.',
  },
];

const investments = [
  {
    title: 'Real Assets',
    icon: '/assets.svg',
  },
  {
    title: 'Equities',
    icon: '/equities.svg',
  },
  {
    title: 'Fixed Income',
    icon: '/fixed-income.svg',
  },
  {
    title: 'Alternatives',
    icon: '/alternatives.svg',
  },
  {
    title: 'Public Markets',
    icon: '/public-market.svg',
  },
  {
    title: 'Liquidity Management',
    icon: '/liquidity-management.svg',
  },
  {
    title: 'Private Markets',
    icon: '/private-market.svg',
  },
  {
    title: 'Private Credit',
    icon: '/private-credit.svg',
  },
  {
    title: 'Real Estate',
    icon: '/real-state.svg',
  },
  {
    title: 'Co-Investments',
    icon: '/co-investments.svg',
  },
  {
    title: 'Direct Investments',
    icon: '/direct-investments.svg',
  },
];

export default function PortfolioManagement() {
  return (
    <>
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
                  <img src={item.icon} />
                </PortfolioCardHeader>
                <PortfolioCardText>{item.text}</PortfolioCardText>
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
                  <img src={item.icon} alt="" />
                </InvestmentCard>
              ))}
            </InvestmentGrid>
          </InvestmentInnerContainer>
        </InvestmentContainer>
      </Container>
    </>
  );
}
