import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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
    <div className="numbers-input">
      <form onSubmit={ handleClickSort }>
        <label htmlFor="sort-column">
          <strong>Coluna:</strong>
          <select
            id="sort-column"
            data-testid="column-sort"
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
            data-testid="column-sort-input-asc"
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
            data-testid="column-sort-input-desc"
          />
          Descendente
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </form>
    </div>
  );
}

export default SortInputs;
