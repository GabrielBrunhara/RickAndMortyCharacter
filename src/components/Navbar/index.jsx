import { useState } from 'react';
import P from 'prop-types';

import * as Styled from './style';

const Navbar = ({ updateFilters, isChecked }) => {
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

  // Função para combinar os filtros e atualizar a lista de filtros
  const handleCheckboxChange = (event) => {
    const { value, checked, name } = event.target;

    if (name === 'status') {
      // Atualiza o filtro de status (vivo, morto, unknown)
      setDeadFilter((prevState) => {
        const newFilter = { ...prevState, [value]: checked };
        const activeStatusFilters = Object.keys(newFilter).filter((key) => newFilter[key]);
        // Passa o filtro de status para o updateFilters
        updateFilters({
          status: activeStatusFilters,
          gender: Object.keys(genderFilter).filter((key) => genderFilter[key]),
        });
        return newFilter;
      });
    } else if (name === 'gender') {
      // Atualiza o filtro de gênero (male, female, other)
      setGenderFilter((prevState) => {
        const newFilter = { ...prevState, [value]: checked };
        const activeGenderFilters = Object.keys(newFilter).filter((key) => newFilter[key]);
        // Passa o filtro de gênero para o updateFilters
        updateFilters({
          gender: activeGenderFilters,
          status: Object.keys(deadFilter).filter((key) => deadFilter[key]),
        });
        return newFilter;
      });
    }
  };

  return (
    <Styled.Navbar $isChecked={isChecked}>
      <Styled.List>
        <h2>Filters</h2>
        {/* Filtro 1: Status (Vivos, Mortos e Unknown) */}
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

        {/* Filtro 2: Gênero (Male, Female, Other) */}
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
  updateFilters: P.func.isRequired,
  isChecked: P.bool.isRequired,
};

export default Navbar;
