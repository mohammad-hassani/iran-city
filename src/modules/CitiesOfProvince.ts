// will return the list of data of cities of a province
import * as cities from "../../list-of-cities-in-Iran/json/cities.json";

export default function citiesOfProvince(PID: number): string[] {
  let Pcities: any = [];
  let citiesLen = Object.keys(cities).length - 1;
  for (let i = 0; i < citiesLen; i++) {
    if (cities[i].province_id == PID) {
      Pcities.push(cities[i]);
    }
  }
  return Pcities;
}
