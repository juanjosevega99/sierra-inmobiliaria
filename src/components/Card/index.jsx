import styles from "./styles.module.css";

export function Card({ houses }) {
  return (
    <div className={styles.houses}>
      {houses.map((house) => (
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
  );
}
