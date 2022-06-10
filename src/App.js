import React, { useState, useEffect } from 'react';
import MyContext from './helpers/MyContext';
import Table from './components/Table';
import './App.css';

function useFetchApi(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((dataAPI) => {
        setData(dataAPI.results);
        setLoading(false);
      });
  }, []);
  return [data, loading];
}

function App() {
  const [data, loading] = useFetchApi([]);
  return (
    <MyContext.Provider value={ data }>
      {loading
        ? <span>Loading...</span>
        : <Table />}
    </MyContext.Provider>
  );
}

export default App;
