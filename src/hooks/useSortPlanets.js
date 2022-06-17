import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NEGATIVE_ONE = -1;

function useSortPlanets(planets) {
  const { orderSort, isSortedByNumber } = useContext(StarWarsContext);
  const { order } = orderSort;
  const { sortBy } = orderSort;
  const checkLength = planets.length > 0;
  let planetsSorted = planets;
  if (checkLength && !isSortedByNumber) {
    planetsSorted = planets.sort((a, b) => (
      a[sortBy] > b[sortBy] ? 1 : NEGATIVE_ONE
    ));
  }
  if (checkLength && isSortedByNumber && order === 'ASC') {
    const planetsWithoutUnknown = planetsSorted
      .filter((planet) => planet[sortBy] !== 'unknown')
      .sort((a, b) => (
        Number(a[sortBy]) - Number(b[sortBy])
      ));
    const planetWithUnknown = planets.filter((planet) => planet[sortBy] === 'unknown');
    planetsSorted = [...planetsWithoutUnknown, ...planetWithUnknown];
  }

  if (checkLength && isSortedByNumber && order === 'DES') {
    const planetsWithoutUnknown = planetsSorted
      .filter((planet) => planet[sortBy] !== 'unknown')
      .sort((a, b) => (
        Number(b[sortBy]) - Number(a[sortBy])
      ));
    const planetWithUnknown = planets.filter((planet) => planet[sortBy] === 'unknown');
    planetsSorted = [...planetsWithoutUnknown, ...planetWithUnknown];
  }

  return planetsSorted;
}

export default useSortPlanets;
