import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import StarWarsContext from '../context/StarWarsContext';
import '../style/TextInput.css';

function TextInput() {
  const [text, setText] = useState('');
  const { setNameFilter, setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  useEffect(() => {
    setNameFilter(text);
    setFilters((state) => ({
      ...state,
      filterByName: {
        name: text,
      },
    }));
  }, [text, setNameFilter, setFilters]);

  return (
    <Container fluid className="text-center">
      <input
        className="name-filter w-75"
        type="text"
        placeholder="Filtrar por Nome"
        value={ text }
        onChange={ handleChange }
      />
    </Container>
  );
}

export default TextInput;
