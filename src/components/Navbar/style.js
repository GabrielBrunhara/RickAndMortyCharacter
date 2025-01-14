import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0px;
  z-index: 1000;
`;

export const List = styled.ul`
  overflow: auto;
  background-color: transparent;
  backdrop-filter: blur(0.5rem);
  border-right: solid 2px var(--accent);
  color: var(--text);
  width: fit-content;
  height: 100%;
  justify-content: start;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  padding: 30px;
  margin: 0;

  svg {
    &:hover {
      fill: var(--text);
    }
  }
`;

export const FilterBox = styled.div`
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 5px;
  color: var(--text);
  width: 200px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid var(--accent);
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: var(--accent);
  }

  select {
    padding: 8px;
    font-size: 14px;
    border: 2px solid var(--accent);
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--text);
    outline: none;
    width: 100%;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: var(--text);
    }
  }
`;

export const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
