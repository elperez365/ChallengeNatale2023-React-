import { useState } from "react";
import PlanetList from "../components/PlanetsList";

import PlanetDetail from "../components/PlanetDetail";

const Homepage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <>
      <PlanetList onSelect={setSelectedPlanet} />
      {selectedPlanet && <PlanetDetail {...selectedPlanet} />}
    </>
  );
};

export default Homepage;
