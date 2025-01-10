import Styled from 'styled-components';

export const InputSearch = Styled.input`
  background-color: var(--secondary);
  color: var(--text);
  text-align: center;
  width: 75%;
  max-width: 500px;
  margin: 20px auto;
  margin-top: 110px;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid var(--text);
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 200ms ease-in-out;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--secondary-text);
    font-style: italic;
    text-align: center;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
