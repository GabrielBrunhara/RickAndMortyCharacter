import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
      transform: rotate(0deg );
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const apear = keyframes`
  from{
    transform: translateX(50%) scale(0);
    opacity: 0;
  }
  to{
    transform: translateX(50%) scale(1);
    opacity: 1;
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 30px;
  font-weight: bold;
  color: var(--accent);
  text-align: center;
`;

export const ButtonContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pages = styled.div`
  color: var(--text);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.button`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -40px;
  animation: ${apear} linear forwards 1s;

  .logo {
    position: absolute;
    right: 50%;
    transform: translate(50%, 25px);
    @media (max-width: 848px) {
      width: 70px;
    }
  }

  .portal {
    animation: ${spin} linear infinite 10s;
    @media (max-width: 848px) {
      width: 130px;
    }
  }

  .title {
    position: absolute;
    right: 50%;
    transform: translate(50%, 95px);
    @media (max-width: 848px) {
      transform: translate(50%, 75px);
      width: 140px;
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  z-index: 3000;

  svg {
    cursor: pointer;
    &:hover {
      fill: var(--text);
    }
  }
`;

export const ToggleMenu = styled.div`
  justify-content: center;
  align-items: center;
  display: block;
  position: relative;
  font-size: 2rem;

  #toggle {
    display: none;
  }
`;
