import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: auto;
  height: 100%;
  display: ${({ $isChecked }) => ($isChecked ? 'flex;' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0px;
  z-index: 1000;
`;

export const List = styled.ul`
  background-color: var(--primary);
  border-right: solid 2px var(--accent);
  color: var(--text);
  min-width: 300px;
  height: 100%;
  justify-content: start;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 70px;
  padding-inline: 30px;
  margin: 0;

  svg {
    &:hover {
      fill: white;
    }
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 5px;
  background-color: var(--background);
  color: var(--text);
  width: 100%;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  select {
    padding: 5px;
    border: 1px solid var(--accent);
    border-radius: 5px;
    background-color: var(--background);
    color: var(--text);
  }
`;
