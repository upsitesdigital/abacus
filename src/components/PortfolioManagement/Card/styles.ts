import { styled } from 'styled-components';
import { COLORS } from '~/utils/constants';

export const PortfolioCardContainer = styled.div`
  border-right: 1px solid #c5c5c5;
  padding: 40px;
  padding-bottom: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 365px;

  @media (max-width: 1170px) {
    min-width: 100%;
    width: 100%;
  }

  &:first-child {
    border-right: 1px solid #c5c5c5;
    border-left: 1px solid #c5c5c5;
  }

  @media (max-width: 850px) {
    &:last-child {
      border-top: 1px solid #c5c5c5;
      border-left: 1px solid #c5c5c5;
    }

    &:nth-child(2) {
      border-bottom: 1px solid #c5c5c5;
    }
  }

  @media (max-width: 650px) {
    border: none;
    padding: 32px 0;

    &:first-child {
      border: none;
    }

    &:last-child {
      border: none;
    }

    &:nth-child(2) {
      border: none;
    }
  }
`;

export const PortfolioCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    margin-bottom: 35px;
  }
`;

export const PortfolioCardTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const PortfolioCardIcon = styled.div``;

export const PortfolioCardText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;

  @media (max-width: 650px) {
    font-size: 16px;
  }

  a {
    text-decoration: underline;
    color: ${COLORS.text};
    font-weight: 500;
  }
`;
