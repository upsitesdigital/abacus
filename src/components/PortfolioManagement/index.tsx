import { useState } from 'react';
import PortfolioCard from './Card';
import {
  PortfolioManagementContainer,
  PortfolioManagementHeader,
  PortfolioManagementSliderContainer,
  PortfolioManagementText,
  PortfolioManagementTitle,
  PortfolioManagementLink,
  PortfolioManagementSliderItemList,
  PortfolioManagementSliderControlContainer,
  PortfolioManagementSliderButton,
} from './styles';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '~/utils/constants';
import { useMediaQuery } from '~/hooks/use-media-query';
import CustomizationIcon from '~/assets/svgs/customization.svg';
import TransparencyIcon from '~/assets/svgs/transparency.svg';
import RiskIcon from '~/assets/svgs/risk-management.svg';
import CoastIcon from '~/assets/svgs/cost.svg';

export const items = [
  {
    icon: <CustomizationIcon />,
    title: 'Customization',
    text: "Our portfolios are highly customizable to meet our client’s long-term investment objectives. <a href='/portfolio-management'>More</a>",
  },
  {
    icon: <TransparencyIcon />,
    title: 'Transparency',
    text: "Our individual security selection allows our clients to follow with the uttermost transparency. <a href='/portfolio-management'>More</a>",
  },
  {
    icon: <CoastIcon />,
    title: 'Cost',
    text: "Eliminate expensive management fees from funds and ETFs, utting charges by traditional banks. <a href='/portfolio-management'>More</a>",
  },
  {
    icon: <RiskIcon />,
    title: 'Risk Management',
    text: "Our security approach improves risk management by adapting the portfolio to market conditions..  <a href='/portfolio-management'>More</a>",
  },
];

const PortfolioManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const { width } = useMediaQuery();

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
    setDirection('prev');
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
    setDirection('next');
  };

  const isMobile = width <= 650;

  return (
    <PortfolioManagementContainer>
      <PortfolioManagementHeader>
        <PortfolioManagementTitle data-aos="fade-up">
          Portfolio Management
        </PortfolioManagementTitle>
        <PortfolioManagementLink  href={MENU_ITEMS[1].route}>
          Portfolio Management
        </PortfolioManagementLink>
      </PortfolioManagementHeader>
      <PortfolioManagementText data-aos="fade-up">
        Abacus Capital Advisors is a research-driven firm that builds and
        monitors investment portfolios for entrepreneurs and high net worth
        families. With our emphasis on research and individual security
        selection instead of utilizing funds and ETFs, our differentiated
        investment strategy presents several advantages to the traditional
        investment model employed by other wealth managers and banks:
      </PortfolioManagementText>
      <PortfolioManagementLink
        className="link-mobile"
        data-aos="fade-up"
        href={MENU_ITEMS[1].route}
      >
        Portfolio Management
      </PortfolioManagementLink>
      <PortfolioManagementSliderContainer>
        <motion.div
          key={currentSlide}
          style={{ width: '100%' }}
          initial={
            direction === 'next'
              ? { opacity: 0, x: '100%' }
              : { opacity: 0, x: '-100%' }
          }
          animate={{ opacity: 1, x: 0 }}
          exit={
            direction === 'next'
              ? { opacity: 0, x: '-100%' }
              : { opacity: 0, x: '100%' }
          }
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
        >
          <PortfolioManagementSliderItemList>
            {items.map((item) => (
              <PortfolioCard
                key={item.title}
                icon={item.icon}
                text={item.text}
                title={item.title}
              />
            ))}
          </PortfolioManagementSliderItemList>
        </motion.div>
        <PortfolioManagementSliderControlContainer>
          <PortfolioManagementSliderButton onClick={handlePrev}>
            <img src="/arrow-up-right.svg" alt="" />
          </PortfolioManagementSliderButton>
          <PortfolioManagementSliderButton onClick={handleNext}>
            <img src="/arrow-up-left.svg" alt="" />
          </PortfolioManagementSliderButton>
        </PortfolioManagementSliderControlContainer>
      </PortfolioManagementSliderContainer>
    </PortfolioManagementContainer>
  );
};

export default PortfolioManagement;
