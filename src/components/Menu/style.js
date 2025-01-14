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

export const Menu = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;

  svg {
    cursor: pointer;
    &:hover {
      fill: var(--text);
      color: var(--text);
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

  svg {
    height: 50%;
    position: absolute;
    right: 50%;
    transform: translate(50%, 80px);
    svg {
      fill: black;
    }
    @media (max-width: 848px) {
      transform: translate(50%, 70px);
      width: 140px;
    }
  }
`;
