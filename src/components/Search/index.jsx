import P from 'prop-types';

import { InputSearch } from './style.js';

export const Search = ({ placeholder = 'Search', value, onChange, onFocus = 'Type something...' }) => {
  const handleFocus = (e) => {
    e.target.placeholder = onFocus;
  };

  const handleBlur = (e) => {
    e.target.placeholder = placeholder;
  };

  return (
    <InputSearch
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

Search.propTypes = {
  placeholder: P.string,
  onFocus: P.string,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
