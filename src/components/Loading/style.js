import Styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LoadingContent = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  img {
    height: 100%;
    animation: ${spin} 2s linear infinite ;
  }

`;
