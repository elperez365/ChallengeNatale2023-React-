/* eslint-disable react/prop-types */
import { planetsData } from "../data/planets";

const PlanetList = ({ onSelect }) => {
  const findPlanetSelected = (planetName) => {
    return planetsData.find((planet) => planet.name === planetName);
  };

  return (
    <ul>
      {planetsData.map((planet) => (
        <li key={planet.name}>
          <a
            onClick={(e) => onSelect(findPlanetSelected(e.target.textContent))}
            href="#"
          >
            {planet.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PlanetList;
