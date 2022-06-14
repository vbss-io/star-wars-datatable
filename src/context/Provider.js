import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState({});
  const [filterPlanets, setFilterPlanets] = useState({});
  const [nameFilter, setNameFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const starWarsContext = {
    planets,
    setPlanets,
    loading,
    setLoading,
    filterPlanets,
    setFilterPlanets,
    nameFilter,
    setNameFilter,
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
