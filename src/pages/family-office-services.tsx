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
`;

const Title = styled.h2`
  max-width: 891px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 98px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
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
  }
`;

const MenuItemDot = styled.li`
  background-color: #9fc899;
  width: 9px;
  height: 9px;
`;

const MenuIllustration = styled.div`
  margin: 0 75px 0 75px;
  width: 268px;
  height: 268px;
  background-color: #1a4f311a;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1a4f311a;

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
    left: -10px;
    top: 40%;
    box-shadow: 0 0 2px #00000040;
    transform: rotate(50deg);
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
            <div className="circle2">
              <div>
                <img src="/logo.svg" alt="A" />
              </div>
            </div>
          </MenuIllustration>
          <Menu>
            {menu2.map((item) => (
              <MenuItem key={item} style={{ flexDirection: 'row-reverse' }}>
                <MenuItemDot style={{ marginLeft: '48px' }} />
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
        </MenuContainer>
      </Container>
    </>
  );
}
