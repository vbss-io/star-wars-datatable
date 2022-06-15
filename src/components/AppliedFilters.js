import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/AppliedFilters.css';

function AppliedFilters() {
  const { filters, setFilters, setColumnsValues } = useContext(StarWarsContext);
  const [haveFilters, setHaveFilters] = useState(false);

  useEffect(() => {
    if (filters.filterByNumber.length > 0) {
      setHaveFilters(true);
    } else {
      setHaveFilters(false);
    }
  }, [filters.filterByNumber]);

  const handleRemoveFilter = ({ target }) => {
    setFilters({
      ...filters,
      filterByNumber: filters.filterByNumber.filter(
        (numberFilter) => numberFilter.column !== target.value,
      ),
    });
    setColumnsValues((state) => [...state, target.value]);
  };

  const handleRemoveAllFilters = () => {
    setFilters((state) => ({
      ...state,
      filterByNumber: [],
    }));
    setColumnsValues([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  return (
    <div>
      { haveFilters && (
        <div>
          <p className="filters-tittle"><strong>Filtros Aplicados:</strong></p>
          {filters.filterByNumber.map((filter) => (
            <div key={ filter.column } data-testid="filter" className="filters">
              {`${filter.column} 
              ${filter.comparison} 
              ${filter.number} `}
              <button
                type="button"
                value={ filter.column }
                onClick={ handleRemoveFilter }
              >
                x
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={ handleRemoveAllFilters }
            data-testid="button-remove-filters"
            className="button-remove-filters"
          >
            Remover Todos
          </button>
        </div>
      )}
    </div>
  );
}

export default AppliedFilters;
