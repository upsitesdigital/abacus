import Link from 'next/link';
import { styled } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';

export const PortfolioManagementContainer = styled.section`
  padding-top: 128px;

  @media (max-width: 750px) {
    padding-top: 83px;
  }

  .link-mobile {
    display: none;
    @media (max-width: 750px) {
      display: block;
      margin-left: 24px;
      margin-top: 45px;
    }
  }
`;

export const PortfolioManagementHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${HORIZONTAL_SPACE}
  margin-bottom: 32px;
`;

export const PortfolioManagementTitle = styled.h1`
  font-size: 32px;
  color: #000;
  font-weight: 400;

  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

export const PortfolioManagementLink = styled(Link)`
  font-size: 16px;
  text-decoration: underline;
  color: #46785c;
  font-weight: 400;

  @media (max-width: 750px) {
    display: none;
    font-size: 20px;
  }
`;

export const PortfolioManagementText = styled.p`
  font-size: 20px;
  width: 100%;
  text-align: justify;
  ${HORIZONTAL_SPACE}
  font-weight: 300;
  line-height: 36px;

  @media (max-width: 750px) {
    font-size: 18px;
    line-height: 32.4px;
    text-align: left;
  }
`;

export const PortfolioManagementSliderContainer = styled.div`
  width: 100%;
  ${HORIZONTAL_SPACE}
  margin-top: 81px;
  border-top: 1px solid #c5c5c5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    margin-top: 71px;
  }

  @media (max-width: 650px) {
    border: none;
  }
`;

export const PortfolioManagementSliderItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 393px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;

    & .item-card:last-child {
      border-top: 1px solid #c5c5c5;
      border-left: 1px solid #c5c5c5;
      grid-column: 1/3;
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 87px;

    & .item-card:last-child {
      border: none;
      border-top: 1px solid #c5c5c5;
    }

    li {
      background-color: red;
    }

   & .item-card {
      border-top: 1px solid #c5c5c5 ;
    }
  }
`;

export const PortfolioManagementSliderControlContainer = styled.div`
  width: 65%;
  height: 50px;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  display: none;

  @media (max-width: 1600px) {
    width: 96%;
  }
`;

export const PortfolioManagementSliderButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
