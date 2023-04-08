import { Card } from "../Card";
import data from "../../mocks/houses.json";

export function Houses() {
  return (
    <div>
      <Card houses={data.Houses} />
    </div>
  );
}
