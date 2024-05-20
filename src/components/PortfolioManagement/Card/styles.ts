import { styled } from 'styled-components';
import { COLORS } from '~/utils/constants';

export const PortfolioCardContainer = styled.div`
  border-right: 1px solid #c5c5c5;
  padding: 40px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    border-right: 1px solid #c5c5c5;
    border-left: 1px solid #c5c5c5;
  }
`;

export const PortfolioCardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PortfolioCardTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
`;

export const PortfolioCardIcon = styled.div``;

export const PortfolioCardText = styled.p`
  font-size: 16px;

  a {
    text-decoration: underline;
    color: ${COLORS.text};
  }
`;
