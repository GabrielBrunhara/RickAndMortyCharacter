import styled from 'styled-components';
export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  color: var(--text);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.548);
  transition: transform 100ms ease-in-out;
  text-align: center;
  align-items: center;
  justify-content: start;
  width: ${({ $singleCharacter }) => ($singleCharacter ? '30%' : '15%')};
  margin-block: 30px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.637);
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
