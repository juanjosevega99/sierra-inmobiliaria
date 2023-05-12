import { useState } from "react";

import { Card } from "../Card";
import styles from "./styles.module.css";
import data from "../../mocks/houses.json";
import HouseDetails from "../HouseDetails";

export function Houses() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleSelectHouse = (house) => {
    setSelectedHouse(house);
  };

  const handleGoBack = () => {
    setSelectedHouse(null);
  };

  return (
    <div>
      {selectedHouse ? (
        <HouseDetails house={selectedHouse} handleBackClick={handleGoBack} />
      ) : (
        <div>
          <div className={styles.containerTitle}>
            <h3 className={styles.title}>
              Encuentra el mejor lugar para arrendar, comprar, el lugar de tus sueños!!! 
            </h3>
          </div>
          <Card houses={data.Houses} handleSelectHouse={handleSelectHouse} />
        </div>
      )}
    </div>
  );
}
