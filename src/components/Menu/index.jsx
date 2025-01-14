import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { HiMenuAlt2 } from 'react-icons/hi';
import P from 'prop-types';

import rickPng from '/assets/logoDark.png';

import Title from '../../../public/assets/title';
import * as Styled from './style';

const Menu = ({ handleRandom, isChecked, setIsChecked }) => {
  return (
    <Styled.Menu>
      <Styled.ToggleMenu $isChecked={isChecked}>
        <label htmlFor="toggle">{isChecked ? <></> : <HiMenuAlt2 size={45} color="var(--accent)" />}</label>
        <input type="checkbox" id="toggle" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      </Styled.ToggleMenu>
      <button onClick={() => handleRandom(true)}>
        <GiPerspectiveDiceSixFacesRandom size={55} color="var(--accent)" />
      </button>
      <Styled.Logo onClick={() => handleRandom(false)}>
        <img src="/RickAndMortyCharacter/assets/portal.png" alt="R&M Portal" width="160" className="portal" />
        <img src={rickPng} alt="logo" width="90" className="logo" />
        <Title fill="var(--text)" size="160px" className="title" />
      </Styled.Logo>
    </Styled.Menu>
  );
};

Menu.propTypes = {
  handleRandom: P.func.isRequired,
  isChecked: P.bool.isRequired,
  setIsChecked: P.func.isRequired,
};

export default Menu;
