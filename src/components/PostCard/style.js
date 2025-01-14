import styled from 'styled-components';
export const PostCardWrapper = styled.div`
  background-color: transparent;
  backdrop-filter: blur(0.5rem);
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 2px var(--accent);
  color: var(--text);
  border-radius: 10px;
  transition: transform 100ms ease-in-out;
  text-align: center;
  align-items: center;
  justify-content: start;
  width: ${({ $singleCharacter }) => ($singleCharacter ? '30%' : '15%')};
  margin-block: 30px;
  margin-inline: 10px;

  svg {
    position: absolute;
    left: 3%;
    top: 2%;

    @media (max-width: 1064px) {
      left: 1%;
      top: 4%;
    }
  }
  &:hover {
    transform: translateY(-10px);
    border: solid 2px var(--text);

    svg {
      fill: var(--text);
    }
  }

  img {
    border: solid 2.5px
      ${({ $gender }) => ($gender === 'Male' ? 'blue;' : $gender === 'Female' ? 'rgb(255, 0, 191);' : 'var(--accent)')};
    margin-top: 10px;
    object-fit: cover;
    border-radius: 50%;
    width: 90%;
    height: auto;

    @media (max-width: 1064px) {
      margin-top: 0;
      margin-left: 10px;
      height: 80%;
      width: auto;
    }
  }

  @media (max-width: 1064px) {
    margin-block: 0;
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: start;
    height: ${({ $singleCharacter }) => ($singleCharacter ? '200px' : '150px')};
  }
`;

export const PostCardContent = styled.div`
  padding-top: 30px;
  display: flex; /* Torna o conteúdo flexível */
  flex-direction: column; /* Empilha os itens verticalmente */
  justify-content: flex-start; /* Começa no topo */
  align-items: center; /* Centraliza horizontalmente */
  flex-grow: 1; /* Faz com que este div cresça para preencher o espaço */

  h2 {
    margin-bottom: 60px;
  }

  p {
    margin-top: auto; /* Move o <p> para o final do container */
  }

  @media (max-width: 1064px) {
    padding-top: 0;
    padding-left: 10px;
    text-align: left;
    align-items: flex-start;

    h2 {
      margin-bottom: 0px;
    }
  }
`;
