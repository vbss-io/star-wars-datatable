import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useFilterPlanets() {
  const { planets, nameFilter } = useContext(StarWarsContext);
  if (nameFilter !== '') {
    return planets.filter(
      (planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  }
  return planets;
}

export default useFilterPlanets;
