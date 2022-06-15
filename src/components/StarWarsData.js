import React, { useContext, useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import useFilterPlanets from '../hooks/useFilterPlanets';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import TextInput from './TextInput';
import NumbersInputs from './NumbersInputs';

function StarWarsData() {
  const { loading, error, filters } = useContext(StarWarsContext);
  useFetchApi();
  const planetsResult = useFilterPlanets();

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }
  return (
    <div className="App">
      <h1>Star Wars DataTable</h1>
      <TextInput />
      <NumbersInputs />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table planets={ planetsResult } />
      )}
    </div>
  );
}

export default StarWarsData;
