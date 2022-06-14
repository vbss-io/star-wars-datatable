import React, { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/TextInput.css';

function TextInput() {
  const [text, setText] = useState('');
  const { setNameFilter } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  useEffect(() => {
    setNameFilter(text);
  }, [text, setNameFilter]);

  return (
    <input
      className="name-filter"
      type="text"
      data-testid="name-filter"
      placeholder="Filter by name"
      value={ text }
      onChange={ handleChange }
    />
  );
}

export default TextInput;
