// will return a list of all provinces
import * as provinces from "../../list-of-cities-in-Iran/json/provinces.json";

export default function AllProvinces(): string[] {
  let provincesArray: any = [];
  for (let i = 0; i < Object.keys(provinces).length - 1; i++) {
    provincesArray.push(provinces[i]);
  }
  return provincesArray;
}
