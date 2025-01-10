import styled from 'styled-components';

export const CardsContainer = styled.div`
  padding-block: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;

  @media (max-width: 1064px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;
