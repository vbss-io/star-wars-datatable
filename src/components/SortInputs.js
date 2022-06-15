import React, { useState } from 'react';
// import StarWarsContext from '../context/StarWarsContext';

function SortInputs() {
  const [columnsValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleSort = (e) => {
    e.preventDefault();
  };

  return (
    <div className="numbers-input">
      <form onSubmit={ handleSort }>
        <label htmlFor="sort-column">
          <strong>Coluna:</strong>
          <select
            id="sort-column"
            data-testid="column-sort"
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
          <input type="radio" id="asc" name="sort" value="ascendente" />
          Ascendente
        </label>
        <label htmlFor="des">
          <input type="radio" id="des" name="sort" value="descendente" />
          Descendente
        </label>
        <button type="submit" data-testid="button-sort">Ordenar</button>
      </form>
    </div>
  );
}

export default SortInputs;
