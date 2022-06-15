import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useFilterPlanets() {
  const {
    planets,
    filters,
  } = useContext(StarWarsContext);
  const nameFilter = filters.filterByName.name;
  const numbersFilters = filters.filterByNumber;
  let filterPlanets = planets;
  if (nameFilter !== '') {
    filterPlanets = planets.filter(
      (planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase()),
    );
  }
  if (numbersFilters.length > 0) {
    numbersFilters.forEach((number) => {
      if (number.comparison === 'maior que') {
        filterPlanets = filterPlanets.filter(
          (planet) => Number(planet[number.column]) > number.number
          && planet[number.column] !== 'unknown',
        );
      } else if (number.comparison === 'menor que') {
        filterPlanets = filterPlanets.filter(
          (planet) => Number(planet[number.column]) < number.number
          && planet[number.column] !== 'unknown',
        );
      } else if (number.comparison === 'igual a') {
        filterPlanets = filterPlanets.filter(
          (planet) => planet[number.column] === number.number,
        );
      }
    });
  }
  return filterPlanets;
}

export default useFilterPlanets;
