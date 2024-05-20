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

export const PADDINGS = {
  maxSpace: 300, //250,
};

export const HORIZONTAL_SPACE = `
  padding-left: ${PADDINGS.maxSpace}px;
  padding-right: ${PADDINGS.maxSpace}px;

  @media (max-width: 1800px){
    padding-left: ${PADDINGS.maxSpace - 100}px;
    padding-right: ${PADDINGS.maxSpace - 100}px;
  }

  @media (max-width: 1600px){
    padding-left: ${PADDINGS.maxSpace - 300}px;
    padding-right: ${PADDINGS.maxSpace - 300}px;
  }
`;

export const COLORS = {
  text: '#9FC899',
  navbarHero: '#1A4F31',
  white: '#FFFFFF',
};
