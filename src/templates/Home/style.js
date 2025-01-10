import styled from 'styled-components';

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
