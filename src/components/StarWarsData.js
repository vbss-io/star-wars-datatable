import React, { useContext } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import useFilterPlanets from '../hooks/useFilterPlanets';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import TextInput from './TextInput';

function StarWarsData() {
  const { loading } = useContext(StarWarsContext);
  useFetchApi();
  const planetsResult = useFilterPlanets();

  return (
    <div className="App">
      <h1>Star Wars DataTable</h1>
      <TextInput />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table planets={ planetsResult } />
      )}
    </div>
  );
}

export default StarWarsData;
