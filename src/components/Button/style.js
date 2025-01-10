import Styled from 'styled-components';

export const ButtonPickle = Styled.img`
  height: ${({ $disabled }) => ($disabled ? '66px' : '35px')};
  margin: 10px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};;
`;
