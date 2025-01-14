import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background-color: var(--primary);
  /*   background-image: url('/RickAndMortyCharacter/assets/teste4.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 848px) {
    background-position: left;
  }
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
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
`;

export const Pages = styled.div`
  color: var(--text);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
