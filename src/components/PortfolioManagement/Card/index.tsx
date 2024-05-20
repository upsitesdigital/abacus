import {
  PortfolioCardContainer,
  PortfolioCardHeader,
  PortfolioCardIcon,
  PortfolioCardText,
  PortfolioCardTitle,
} from './styles';

interface PortfolioCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ icon, text, title }) => {
  return (
    <PortfolioCardContainer>
      <PortfolioCardHeader>
        <PortfolioCardTitle>{title}</PortfolioCardTitle>
        <PortfolioCardIcon>{icon}</PortfolioCardIcon>
      </PortfolioCardHeader>
      <PortfolioCardText
        dangerouslySetInnerHTML={{ __html: text }}
      ></PortfolioCardText>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
