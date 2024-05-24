import styled from 'styled-components';
import HeroOfficeServices from '~/components/Hero/OfficeServices';
import { HORIZONTAL_SPACE, PADDINGS } from '~/utils/constants';

const Container = styled.div`
  width: 100%;
  ${HORIZONTAL_SPACE}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 117px;
  padding-bottom: 230px;

  @media (max-width: 690px) {
    padding-top: 65px;
    padding-bottom: 0;
  }
`;

const Title = styled.h2`
  max-width: 891px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;

  @media (max-width: 690px) {
    font-size: 22px;
    line-height: 30.05px;
  }

  @media (max-width: 390px) {
    max-width: 329px;
    text-align: left;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 98px;

  @media (max-width: 1050px) {
    flex-direction: column;
    margin-top: 64px;
    width: 100%;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  .menu-2 {
    flex-direction: row-reverse;
    .dot {
      margin-left: 48px;
    }
  }

  @media (max-width: 690px) {
    width: 100%;

    .menu-2 {
      flex-direction: row;

      .dot {
        margin-left: 0;
        margin-right: 48px;
      }
    }
  }
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #c5c5c5;
  padding: 32px 0;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover > .itemLegend {
    opacity: 1;
    z-index: 7;
  }

  @media (max-width: 690px) {
    width: 100%;
    font-size: 16px;
  }
`;

const MenuItemDot = styled.li`
  background-color: #9fc899;
  width: 9px;
  height: 9px;
`;

const MenuIllustration = styled.div`
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (max-width: 690px) {
    margin-top: 145px;
    margin-bottom: 75px;
  }

  .rounded-c {
    margin: 0 75px 0 75px;
    width: 268px;
    height: 268px;
    background-color: #1a4f311a;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1a4f311a;
  }

  .circle2 {
    width: 190px;
    height: 190px;
    border-radius: 100%;
    background-color: #1a4f31;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuLegend = styled.p`
  background-color: #fff;
  box-shadow: 0 0 2px #00000040;
  position: absolute;
  opacity: 0;
  left: 100%;
  min-width: 210px;
  height: 100px;
  margin-left: 20px;
  transition: 0.5s;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 690px) {
    display: none;
  }

  p {
    padding: 24px;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .seta {
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    left: -5px;
    top: 40%;
    box-shadow: 0 0 2px #00000040;
    transform: rotate(50deg);
  }

  .seta2 {
    right: -10px;
    left: 93%;
    right: 0;
  }
`;

const menu1 = [
  'Accounting Solutions',
  'Financial Planning',
  'Family Governance',
  'Life Insurance',
];

const menu2 = [
  'Concierge Services',
  'Estate Planning',
  'Life Insurance',
  'Real Estate Acquistion',
];

export default function FamilyOfficeServices() {
  return (
    <>
      <HeroOfficeServices />
      <Container>
        <Title>
          A broad network of professional service providers is available to
          integrate with your wealth management strategy
        </Title>
        <MenuContainer>
          <Menu>
            {menu1.map((item) => (
              <MenuItem key={item}>
                <MenuItemDot style={{ marginRight: '48px' }} />
                {item}
                <MenuLegend className="itemLegend">
                  <div className="seta" />
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                  </p>
                </MenuLegend>
              </MenuItem>
            ))}
          </Menu>
          <MenuIllustration>
            <div className="rounded-c">
              <div className="circle2">
                <div>
                  <img src="/logo.svg" alt="A" />
                </div>
              </div>
            </div>
          </MenuIllustration>
          <Menu>
            {menu2.map((item) => (
              <MenuItem className="menu-2" key={item}>
                <MenuItemDot className="dot" />
                {item}
                <MenuLegend style={{ left: '-90%' }} className="itemLegend">
                  <div className="seta seta2" />
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                  </p>
                </MenuLegend>
              </MenuItem>
            ))}
          </Menu>
        </MenuContainer>
      </Container>
    </>
  );
}
