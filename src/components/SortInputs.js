import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import StarWarsContext from '../context/StarWarsContext';
import '../style/Filter-And-Sort.css';

function SortInputs() {
  const [columnsValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnSort, setColumnSort] = useState('population');
  const [orderToSort, setOrderToSort] = useState('ASC');
  const { setOrderSort, setIsSortedByNumber } = useContext(StarWarsContext);

  const handleColumnChange = ({ target }) => {
    setColumnSort(target.value);
  };

  const handleSortChange = ({ target }) => {
    setOrderToSort(target.value);
  };

  const handleClickSort = (e) => {
    e.preventDefault();
    setOrderSort({
      sortBy: columnSort,
      order: orderToSort,
    });
    setIsSortedByNumber(true);
  };

  return (
    <Container className="filter-and-sort">
      <form onSubmit={ handleClickSort }>
        <label htmlFor="sort-column">
          <strong>Ordenar por:</strong>
          <select
            id="sort-column"
            className="mb-2"
            onChange={ handleColumnChange }
          >
            {
              columnsValues.map((column) => (
                <option key={ column } value={ column }>
                  { column }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="asc">
          <input
            type="radio"
            id="asc"
            name="sort"
            onChange={ handleSortChange }
            value="ASC"
            checked={ orderToSort === 'ASC' }
          />
          Ascendente
        </label>
        <label htmlFor="des">
          <input
            type="radio"
            id="des"
            name="sort"
            onChange={ handleSortChange }
            value="DES"
            checked={ orderToSort === 'DES' }
            className="mb-3"
          />
          Descendente
        </label>
        <button
          type="submit"
          className="mb-3"
        >
          Ordenar
        </button>
      </form>
    </Container>
  );
}

export default SortInputs;
