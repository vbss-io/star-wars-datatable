import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
    <Container fluid>
      { haveFilters && (
        <Container className="w-100">
          <p className="filters-tittle"><strong>Filtros Aplicados:</strong></p>
          {filters.filterByNumber.map((filter) => (
            <Row
              className="filters mb-2"
              key={ filter.column }
            >
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
            </Row>
          ))}
          <Row className="w-50 mx-auto mb-3">
            <button
              type="button"
              onClick={ handleRemoveAllFilters }
              className="button-remove-filters"
            >
              Remover Todos
            </button>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default AppliedFilters;
