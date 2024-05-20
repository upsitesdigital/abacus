import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 9;
`;

export const ModalContent = styled.div`
  width: 748px;
  height: auto;
  background-color: #fff;
  padding: 60px;
  position: relative;
`;

export const ModalHeader = styled.div`
  width: 748px;
  height: 114.96px;
  background-color: #46785c;
  background-image: url('/modal-header-bg.png');
  background-repeat: no-repeat;
  background-position: right;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

export const HeaderContainer = styled.div`
  display: flex;
  z-index: 3;
  align-items: flex-end;
  margin-bottom: 39px;
`;

export const TeamPic = styled.img`
  width: 163.24px;
  height: 166.31px;
`;

export const TeamName = styled.h4`
  margin-left: 32px;
  font-size: 27.59px;
  font-weight: 400;
  color: #46785c;
`;

export const TeamTitle = styled.h4`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  margin-bottom: 18px;
`;

export const TeamText = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #000;
`;

export const Footer = styled.div`
  border-top: 1px solid #dddddd;
  padding-top: 18px;
  margin-top: 50px;

  p {
    font-size: 16px;
    font-weight: 300;
    color: #000;
  }
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 27px;
  top: 57px;
  cursor: pointer;
`;

export type Person = {
  title: string;
  pic: string;
  shortTitle: string;
  name: string;
  text: string;
  skills: string[];
  linkdin: string;
};

type Props = {
  handleClose: () => void;
  data: Person | null;
};

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
};

export const ModalTeam = ({ data, handleClose }: Props) => {
  return (
    <AnimatePresence>
      {!!data && (
        <ModalOverlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContent>
            <ModalHeader />
            <Content>
              <HeaderContainer>
                <CloseButton onClick={handleClose}>
                  <img src="/close.svg" alt="close" />
                </CloseButton>
                <TeamPic src={data?.pic} />
                <TeamName>{data?.name}</TeamName>
              </HeaderContainer>
              <TeamTitle>{data?.title}</TeamTitle>
              <TeamText
                dangerouslySetInnerHTML={{ __html: data?.text || '' }}
              ></TeamText>
              <Footer>
                {data?.skills.map((item) => <p key={item}>{item}</p>)}
              </Footer>
            </Content>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
