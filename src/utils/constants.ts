type MENU_ITEMS_TYPE = {
  title: string;
  route: string;
};

export const MENU_ITEMS: MENU_ITEMS_TYPE[] = [
  {
    title: 'About us',
    route: '/about-us',
  },
  {
    title: 'Portfolio Management',
    route: '/portfolio-management',
  },

  {
    title: 'Family Office Services',
    route: '/family-office-services',
  },
  {
    title: 'Client Login',
    route: 'https://www.abacuscapitaladvisors.com/clientes',
  },
  {
    title: 'Contact Us',
    route: '/contact-us',
  },
];

export const MENU_ITEMS_MOBILE: MENU_ITEMS_TYPE[] = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'Portfolio Management',
    route: '/portfolio-management',
  },

  {
    title: 'Family Office Services',
    route: '/family-office-services',
  },
  {
    title: 'About',
    route: '/about-us',
  },
  {
    title: 'Contact',
    route: '/contact-us',
  },
];


export const PADDINGS = {
  maxSpace: 395, 
};

export const HORIZONTAL_SPACE = `
  padding-left: ${PADDINGS.maxSpace}px;
  padding-right: ${PADDINGS.maxSpace}px;

  @media (max-width: 1800px){
    padding-left: ${PADDINGS.maxSpace - 80}px;
    padding-right: ${PADDINGS.maxSpace - 80}px;
  }

  @media (max-width: 1650px){
    padding-left: ${PADDINGS.maxSpace - 150}px;
    padding-right: ${PADDINGS.maxSpace - 150}px;
  }

    @media (max-width: 1500px){
    padding-left: ${PADDINGS.maxSpace - 200}px;
    padding-right: ${PADDINGS.maxSpace - 200}px;
  }

  @media (max-width: 1360px){
    padding-left: ${PADDINGS.maxSpace - 250}px;
    padding-right: ${PADDINGS.maxSpace - 250}px;
  }

  @media (max-width: 1300px){
    padding-left:70px;
    padding-right: 70px;
  }

  @media (max-width: 1115px) {
    padding-left:50px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left:24px;
    padding-right: 24px;
  }
`;

export const COLORS = {
  text: '#9FC899',
  navbarHero: '#1A4F31',
  white: '#FFFFFF',
};
