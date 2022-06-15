import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumbersInputs() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [inputNumberFilter, setInputNumberFilter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Adicionar filtro');
  const { setFilters, columnsValues, filters } = useContext(StarWarsContext);

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

  useEffect(() => {
    const numberFilter = filters.filterByNumber.length;
    const THREE = 3;
    if (numberFilter === THREE) {
      setButtonDisabled(true);
      setButtonMessage('Limite de filtros atingido');
    } else {
      setButtonDisabled(false);
      setButtonMessage('Adicionar filtro');
    }
  }, [filters.filterByNumber]);

  return (
    <div className="numbers-input">
      <form onSubmit={ handleNumbersFilter }>
        <label htmlFor="filter-column">
          <strong>Coluna:</strong>
          <select
            id="filter-column"
            data-testid="column-filter"
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
        <label htmlFor="comparison">
          <strong>Operador:</strong>
          <select
            id="comparison"
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
          min="0"
          required
        />
        <button
          type="submit"
          data-testid="button-filter"
          disabled={ buttonDisabled }
          title={ buttonMessage }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default NumbersInputs;
