import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState({});
  const [error, setError] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [numbersFilters, setNumbersFilters] = useState({});
  const [loading, setLoading] = useState(true);
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
