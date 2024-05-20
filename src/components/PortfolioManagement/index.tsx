import { useRef, useState } from 'react';
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


export const items = {
  '0': [
    {
      icon: '/customization.svg',
      title: 'Customization',
      text: "Our portfolios are highly customizable to meet our client’s long-term investment objectives. <a href=''>More</a>",
    },
    {
      icon: '/transparency.svg',
      title: '',
      text: "Our individual security selection allows our clients to follow with the uttermost transparency the daily evolution of the investment portfolio. <a href=''>More</a>",
    },
    {
      icon: '/cost.svg',
      title: 'Cost',
      text: "By eliminating expensive management fees associated with funds and ETFs, we remove a layer of fees that clients are normally charged by traditional wealth managers and banks. <a href=''>More</a>",
    },
  ],
  '1': [
    {
      icon: '/customization.svg',
      title: 'Customization 2',
      text: "Our portfolios are highly customizable to meet our client’s long-term investment objectives. <a href=''>More</a>",
    },
    {
      icon: '/transparency.svg',
      title: '2',
      text: "Our individual security selection allows our clients to follow with the uttermost transparency the daily evolution of the investment portfolio. <a href=''>More</a>",
    },
    {
      icon: '/cost.svg',
      title: 'Cost 2',
      text: "By eliminating expensive management fees associated with funds and ETFs, we remove a layer of fees that clients are normally charged by traditional wealth managers and banks. <a href=''>More</a>",
    },
  ],
};


const PortfolioManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
    setDirection('prev');
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
    setDirection('next');
  };

  return (
    <PortfolioManagementContainer>
      <PortfolioManagementHeader>
        <PortfolioManagementTitle data-aos="fade-up">
          Portfolio Management
        </PortfolioManagementTitle>
        <PortfolioManagementLink data-aos="fade-up" href={MENU_ITEMS[1].route}>
          Portfolio Management
        </PortfolioManagementLink>
      </PortfolioManagementHeader>
      <PortfolioManagementText data-aos="fade-up">
        Abacus Capital Advisors is a research-driven firm that builds and
        monitors investment portfolios for entrepreneurs and ultra-high net
        worth families. With our emphasis on research and individual security
        selection instead of utilizing funds and ETFs, our differentiated
        investment strategy presents several advantages to the traditional
        investment model employed by other wealth managers and banks:
      </PortfolioManagementText>
      <PortfolioManagementSliderContainer data-aos="fade-up">
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
            {items[`${currentSlide}` as keyof typeof items].map((item) => (
              <PortfolioCard
                key={item.title}
                icon={<img src={item.icon} />}
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
