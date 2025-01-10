import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const apear = keyframes`
  from{
    transform: translateY(100px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Navbar = styled(motion.nav)`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--accent);
  color: var(--primary);
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding-left: 50px;
  padding-right: 20px;

  overflow: hidden;
  z-index: 1000;

  @media (min-width: 1630px) {
    padding-inline: 150px;
  }

  @media (max-width: 848px) {
    overflow: visible;
    padding-inline: 30px;
    height: 60px;
  }
`;

export const ListName = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0;
  margin: 0;
`;

export const Name = styled.li`
  display: flex;
  align-items: center;
  gap: 0px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;

  img {
    margin-left: 20px;
    animation: ${apear} linear forwards 3s;
    &:hover {
      filter: drop-shadow(0px 0px 10px rgb(30, 255, 0));
    }
    @media (max-width: 848px) {
      width: 50px;
    }
  }

  @media (max-width: 762px) {
    a {
      font-size: 15px;
      padding: 0;
      margin-left: 10px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 10px 2.5px;
  margin: 0;
`;
