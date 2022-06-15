import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumbersInputs() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [inputNumberFilter, setInputNumberFilter] = useState(0);
  const [columnsValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const { setFilters } = useContext(StarWarsContext);

  const handleColumnChange = ({ target }) => {
    setColumnFilter(target.value);
  };

  const handleComparisonChange = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const handleInputNumberChange = ({ target }) => {
    setInputNumberFilter(target.value);
  };

  const handleNumbersFilter = (e) => {
    e.preventDefault();
    setFilters((state) => ({
      ...state,
      filterByNumber: [
        ...state.filterByNumber,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          number: inputNumberFilter,
        },
      ],
    }));
    columnsValues.splice(columnsValues.indexOf(columnFilter), 1);
    setInputNumberFilter(0);
    setColumnFilter(columnsValues[0]);
  };

  return (
    <div className="numbers-input">
      <form onSubmit={ handleNumbersFilter }>
        <label htmlFor="column">
          Coluna:
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleColumnChange }
          >
            {/* <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option> */}
            {
              columnsValues.map((column) => (
                <option key={ column } value={ column }>
                  { column }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison">
          Operador:
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleComparisonChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          placeholder="Value"
          data-testid="value-filter"
          value={ inputNumberFilter }
          onChange={ handleInputNumberChange }
          required
        />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
    </div>
  );
}

export default NumbersInputs;
