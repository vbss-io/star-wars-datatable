import { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useFetchApi() {
  const { setPlanets, setFilterPlanets, setLoading } = useContext(StarWarsContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((dataAPI) => {
          setPlanets(dataAPI.results);
          setFilterPlanets(dataAPI.results);
          setLoading(false);
        });
    };
    fetchData();
  }, [setPlanets, setLoading, setFilterPlanets]);
}

export default useFetchApi;
