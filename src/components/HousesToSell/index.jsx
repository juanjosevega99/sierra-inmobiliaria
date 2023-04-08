import styles from "../Card/styles.module.css";
import data from "../../mocks/houses.json";

export function HousesToSell() {
  const houses = data.Houses;
  const rentHouses = houses.filter((house) => house.type === "vender");

  return (
    <div>
      <div className={styles.containerTitle}>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia est
          architecto praesentium harum sequi voluptatem!
        </h3>
      </div>

      <div className={styles.houses}>
        {rentHouses.map((house) => (
          <div key={house.id} className={styles.house}>
            <img
              src={house.preview}
              alt="House"
              className={styles["house-image"]}
            />
            <p className={styles["house-type"]}>{house.type}</p>
            <p className={styles["house-location"]}>{house.location}</p>
            <p className={styles["house-price"]}>{house.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
