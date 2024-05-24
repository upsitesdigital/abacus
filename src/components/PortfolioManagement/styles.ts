import Link from 'next/link';
import { styled } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE, PADDINGS } from '~/utils/constants';

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

export const PortfolioManagementTitle = styled.h3`
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
  transition: 0.5s;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    transition: 0.5s;

    &:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }

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
  margin-top: 81px;
  border-top: 1px solid #c5c5c5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${HORIZONTAL_SPACE};

  @media (max-width: 750px) {
    margin-top: 71px;
  }

  @media (max-width: 650px) {
    border: none;
  }
`;

export const PortfolioManagementSliderItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 393px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;

    & .item-card:last-child {
      border: none;
      border-right: 1px solid #c5c5c5;
      width: 100%;
    }

    & .item-card:nth-child(3) {
      border: 1px solid #c5c5c5;
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

    & .item-card:nth-child(3) {
      border: none;
      border-top: 1px solid #c5c5c5;
    }

    & .item-card {
      border-top: 1px solid #c5c5c5;
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
