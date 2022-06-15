import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState('');
  const [numbersFilters, setNumbersFilters] = useState({});
  const [columnsValues, setColumnsValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumber: [],
  });

  const starWarsContext = {
    planets,
    setPlanets,
    error,
    setError,
    loading,
    setLoading,
    nameFilter,
    setNameFilter,
    numbersFilters,
    setNumbersFilters,
    filters,
    setFilters,
    columnsValues,
    setColumnsValues,
  };

  return (
    <StarWarsContext.Provider value={ starWarsContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
