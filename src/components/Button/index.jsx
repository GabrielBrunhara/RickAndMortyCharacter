import P from 'prop-types';

import { ButtonPickle } from './style';

export const Button = ({ onClick, modifier = '', disabled }) => {
  const lado = disabled ? (modifier === 'prev' ? '3' : '4') : modifier === 'prev' ? '' : '2';

  return <ButtonPickle src={`/assets/pickle${lado}.png`} alt="Botão" onClick={onClick} $disabled={disabled} />;
};

Button.propTypes = {
  onClick: P.func.isRequired,
  disabled: P.bool,
  modifier: P.string,
};
