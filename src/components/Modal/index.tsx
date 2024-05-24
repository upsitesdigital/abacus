import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useClickOutside from '~/hooks/use-click-outside';

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
  z-index: 9;
  padding: 50px;

  @media (max-width: 600px) {
    padding: 0;
    z-index: 12;
    overflow: auto;
    height: auto;
  }
`;

export const ModalContent = styled.div`
  width: 748px;
  height: auto;
  background-color: #fff;
  padding: 50px 60px;
  position: relative;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0;
    padding-bottom: 44px;
  }
`;

export const ModalHeader = styled.div`
  max-width: 748px;
  width: 100%;
  height: 114.96px;
  background-color: #46785c;
  background-image: url('/modal-header-bg.webp');
  background-repeat: no-repeat;
  background-position: 107%;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    background-position-x: 30px;
    background-color: #1a4f31;
    position: relative;
    height: 68.84px;
  }

  @media (max-width: 400px) {
    background-position-x: -30px;
  }

  @media (max-width: 375px) {
    background-position-x: -20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 34px 26px 0 26px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  z-index: 3;
  align-items: flex-end;
  margin-bottom: 39px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const TeamPic = styled.img`
  width: 163.24px;
  height: 166.31px;
  object-fit: cover;
`;

export const TeamName = styled.h4`
  margin-left: 32px;
  font-size: 27.59px;
  font-weight: 400;
  color: #46785c;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 44px;
    margin-left: 0;
  }
`;

export const TeamTitle = styled.h4`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
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
    font-size: 14px;
    font-weight: 300;
    color: #000;
  }
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 37px;
  top: 57px;
  cursor: pointer;

  @media (max-width: 700px) {
    top: 27px;
    right: 24px;
    img {
      width: 13px;
      height: 13px;
    }
  }
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

export const ModalTeam = ({ data, handleClose }: Props) => {
  const ref = useClickOutside(handleClose);

  return (
    <AnimatePresence>
      {!!data && (
        <ModalOverlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContent ref={ref as any}>
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
