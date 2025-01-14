import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import P from 'prop-types';

import * as Styled from './style';
import Switch from '../../templates/Switch';

const Navbar = ({ updateFilters, isChecked, locations, handleThemeToggle, dark, setIsChecked }) => {
  const variants = {
    hidden: { x: '-100%' }, // Fora da tela à esquerda
    visible: { x: 0 }, // Totalmente visível
    exit: { x: '-100%' }, // Sai para a esquerda
  };
  const [deadFilter, setDeadFilter] = useState({
    alive: false,
    dead: false,
    unknown: false,
  });

  const [genderFilter, setGenderFilter] = useState({
    male: false,
    female: false,
    genderless: false,
    unknown: false,
  });

  const [selectedLocation, setSelectedLocation] = useState('');

  const handleCheckboxChange = (event) => {
    const { value, checked, name } = event.target;

    if (name === 'status') {
      setDeadFilter((prevState) => {
        const newFilter = { ...prevState, [value]: checked };
        const activeStatusFilters = Object.keys(newFilter).filter((key) => newFilter[key]);
        updateFilters({
          status: activeStatusFilters,
          gender: Object.keys(genderFilter).filter((key) => genderFilter[key]),
          location: selectedLocation,
        });
        return newFilter;
      });
    } else if (name === 'gender') {
      setGenderFilter((prevState) => {
        const newFilter = { ...prevState, [value]: checked };
        const activeGenderFilters = Object.keys(newFilter).filter((key) => newFilter[key]);
        updateFilters({
          gender: activeGenderFilters,
          status: Object.keys(deadFilter).filter((key) => deadFilter[key]),
          location: selectedLocation,
        });
        return newFilter;
      });
    }
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocation(value);
    updateFilters({
      status: Object.keys(deadFilter).filter((key) => deadFilter[key]),
      gender: Object.keys(genderFilter).filter((key) => genderFilter[key]),
      location: value,
    });
  };

  return (
    <Styled.Navbar
      $isChecked={isChecked}
      initial="hidden"
      animate={isChecked ? 'visible' : 'hidden'}
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
    >
      <Styled.List>
        <Styled.Top onclick>
          <h2>Theme</h2>
          <button onClick={() => setIsChecked(false)}>
            <IoClose size={45} color="var(--accent)" />
          </button>
        </Styled.Top>
        <Switch handleThemeToggle={handleThemeToggle} dark={dark} />
        <h2>Filters</h2>
        {/* Filtro 3: Location */}
        <Styled.FilterBox>
          <h3>Location</h3>
          <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </Styled.FilterBox>
        {/* Filtro 1: Status */}
        <Styled.FilterBox>
          <h3>Status</h3>
          <label>
            <input
              type="checkbox"
              name="status"
              value="alive"
              checked={deadFilter.alive}
              onChange={handleCheckboxChange}
            />
            Alive
          </label>
          <label>
            <input
              type="checkbox"
              name="status"
              value="dead"
              checked={deadFilter.dead}
              onChange={handleCheckboxChange}
            />
            Dead
          </label>
          <label>
            <input
              type="checkbox"
              name="status"
              value="unknown"
              checked={deadFilter.unknown}
              onChange={handleCheckboxChange}
            />
            Unknown
          </label>
        </Styled.FilterBox>

        {/* Filtro 2: Gênero */}
        <Styled.FilterBox>
          <h3>Gender</h3>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="male"
              checked={genderFilter.male}
              onChange={handleCheckboxChange}
            />
            Male
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="female"
              checked={genderFilter.female}
              onChange={handleCheckboxChange}
            />
            Female
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="genderless"
              checked={genderFilter.genderless}
              onChange={handleCheckboxChange}
            />
            Genderless
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="unknown"
              checked={genderFilter.unknown}
              onChange={handleCheckboxChange}
            />
            Unknown
          </label>
        </Styled.FilterBox>
      </Styled.List>
    </Styled.Navbar>
  );
};

Navbar.propTypes = {
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
  updateFilters: P.func.isRequired,
  setIsChecked: P.func.isRequired,
  isChecked: P.bool.isRequired,
  locations: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      name: P.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
