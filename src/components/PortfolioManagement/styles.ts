import Link from 'next/link';
import { styled } from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from '~/utils/constants';

export const PortfolioManagementContainer = styled.section`
  /* height: 798px; */
  padding-top: 100px;
`;

export const PortfolioManagementHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${HORIZONTAL_SPACE}
`;

export const PortfolioManagementTitle = styled.h1`
  font-size: 32px;
  color: #000;
  font-weight: 400;
`;

export const PortfolioManagementLink = styled(Link)`
  font-size: 16px;
  text-decoration: underline;
  color: ${COLORS.text};
  font-weight: 300;
`;

export const PortfolioManagementText = styled.p`
  font-size: 20px;
  width: 100%;
  margin-top: 20px;
  text-align: justify;
  ${HORIZONTAL_SPACE}
  font-weight: 300;
`;

export const PortfolioManagementSliderContainer = styled.div`
  width: 100%;
  ${HORIZONTAL_SPACE}
  margin-top: 20px;
  border-top: 1px solid #c5c5c5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PortfolioManagementSliderItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 393px;
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
