import styled, { keyframes } from 'styled-components';
import { IllustrationContainer } from '../Hero/About';
import { COLORS } from './../../utils/constants';

const l20 = keyframes`
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   87.5% {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
   90.5% {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
  100%  {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
`;

const l30 = keyframes` 
   0%    {transform:scaleY(1)  rotate(0deg)}
   49.99%{transform:scaleY(1)  rotate(135deg)}
   50%   {transform:scaleY(-1) rotate(0deg)}
   75%   {transform:scaleY(-1) rotate(-135deg)}
   100%  {transform:scaleY(1)  rotate(0deg)}
`;

const pulseAnimation = keyframes` 
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #46785c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderLogo = styled.div``;

export const IllustrationBg = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerCircleBig {
    width: 346.75px;
    height: 346.75px;
    border: 2px solid #46785c;
    background: #224f1a87;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    animation:
      ${l20} 9s infinite linear;
  }

  .innerSmallCircle {
    width: 184px;
    height: 184px;
    border: 2px solid #46785c;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
    animation: ${pulseAnimation} 10s infinite linear;
  }
`;

const IllustrationBigCircle = styled.div`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`;

const IllustrationCuttedCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: transparent;
  background: ${COLORS.navbarHero};

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderLogo>
        <div
          className="animation-circle-right"
          style={{ position: 'relative' }}
        >
          <IllustrationContainer>
            <div
              style={{
                width: '20px',
                height: '20px',
                position: 'absolute',
                left: '-90px',
                bottom: 0,
                transform: 'rotate(180deg)',
                marginBottom: '60px',
              }}
            >
              <img src="/up.svg" alt="" />
            </div>
            <IllustrationBigCircle>
              <IllustrationBg>
                <div className="innerCircleBig">
                  <div className="innerSmallCircle">
                    <img src="/abacus-empty.svg" alt="" />
                  </div>
                </div>
              </IllustrationBg>
            </IllustrationBigCircle>
          </IllustrationContainer>
        </div>
      </LoaderLogo>
    </LoaderContainer>
  );
};

export default Loader;
