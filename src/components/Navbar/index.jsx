import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
/* import { Link } from 'react-router-dom'; */

import rickSvg from '/assets/logoDark.png';
import rickSvg2 from '/assets/logoLight.png';

import P from 'prop-types';

import * as Styled from './style';
import Switch from '../../templates/Switch';

const Navbar = ({ handleRandom, handleThemeToggle, dark }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const navbarRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';
    setIsVisible(direction === 'up');
  });

  return (
    <Styled.Navbar
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <Styled.ListName>
        <Styled.Name>
          <Switch handleThemeToggle={handleThemeToggle} dark={dark} />
          <img src={dark ? rickSvg : rickSvg2} alt="logo" width="80" />
          <a href="#about" onClick={() => handleRandom(false)}>
            Rick & Morty
          </a>
        </Styled.Name>
      </Styled.ListName>
      <Styled.List>
        <li>
          <a href="#about" onClick={() => handleRandom(true)}>
            <GiPerspectiveDiceSixFacesRandom size={45} />
          </a>
        </li>
      </Styled.List>
    </Styled.Navbar>
  );
};

Navbar.propTypes = {
  handleRandom: P.func.isRequired,
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
};

export default Navbar;
