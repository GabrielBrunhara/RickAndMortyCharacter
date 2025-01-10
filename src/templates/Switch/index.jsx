import { useEffect, useState } from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const StyledSwitchWrapper = styled.div`
  cursor: pointer;

  align-items: center;
  padding: 0px;

  .form-check-input {
    background-color: white;
    background-image: url('/assets/portal.png');
    transform: scale(1.5);
    border-color: white;
  }

  .form-check-input:focus {
    box-shadow: none;
  }

  .form-check-input:checked {
    background-color: #1e1e2c;
    border-color: #1e1e2c;
  }
  @media (max-width: 848px) {
    top: 17px;
    left: 20px;
    .form-check-input {
      transform: scale(1.1);
    }
  }
`;

const Switch = ({ handleThemeToggle, dark }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    handleThemeToggle(!isChecked);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(dark);
  }, [dark]);

  return (
    <StyledSwitchWrapper>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="customSwitch"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>
    </StyledSwitchWrapper>
  );
};

Switch.propTypes = {
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
};

export default Switch;
