import { Card } from "../Card";
import styles from "./styles.module.css";
import data from "../../mocks/houses.json";

export function Houses() {
  return (
    <div>
      <div className={styles.containerTitle}>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia est
          architecto praesentium harum sequi voluptatem!
        </h3>
      </div>
      <Card houses={data.Houses} />
    </div>
  );
}
