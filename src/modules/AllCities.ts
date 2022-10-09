// will return a list of all cities
import * as cities from "../../list-of-cities-in-Iran/json/cities.json";

export default function AllCities(): string[] {
  let citiesArray: any = [];
  let citiesLen = Object.keys(cities).length - 1;
  for (let i = 0; i < citiesLen; i++) {
    citiesArray.push(cities[i]);
  }
  return citiesArray;
}
