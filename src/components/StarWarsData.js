import React, { useContext } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import useFilterPlanets from '../hooks/useFilterPlanets';
import useSortPlanets from '../hooks/useSortPlanets';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import TextInput from './TextInput';
import NumbersInputs from './NumbersInputs';
import AppliedFilters from './AppliedFilters';
import SortInputs from './SortInputs';
import Header from './Header';
import '../App.css';
import '../style/Filter-And-Sort.css';

function StarWarsData() {
  const { loading, error } = useContext(StarWarsContext);
  useFetchApi();
  const planetsFiltered = useFilterPlanets();
  const planetsResult = useSortPlanets(planetsFiltered);

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
      <Header />
      <h1 id="StarWarsDataTable">Star Wars Planets DataTable</h1>
      <TextInput />
      <div className="filter-and-sort">
        <NumbersInputs />
        <SortInputs />
      </div>
      <AppliedFilters />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table planets={ planetsResult } />
      )}
    </div>
  );
}

export default StarWarsData;
