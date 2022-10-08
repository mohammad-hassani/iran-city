// will return a list of all cities
import * as cities from "../../list-of-cities-in-Iran/json/cities";

export default function AllCities(): string[] {
  let citiesArray: any = [];
  for (let i = 0; i < Object.keys(cities).length - 1; i++) {
    citiesArray.push(cities[i]);
  }
  return citiesArray;
}
