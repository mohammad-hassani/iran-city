// will return all city data by searching ID of city
import * as cities from "../../list-of-cities-in-Iran/json/cities.json";
import * as provinces from "../../list-of-cities-in-Iran/json/provinces.json";

interface stringArray {
  id: number;
  name: string;
  province_id: number;
  province_name: string;
}

export default function citiesOfProvince(
  idOfCity: number
): stringArray[] | ["شهر یافت نشد"] {
  let PID;
  let cityData: any = [];
  let cityNotFund: boolean = true;
  let citiesLen = Object.keys(cities).length - 1;
  let provincesLen = Object.keys(provinces).length - 1;
  for (let i = 0; i < citiesLen; i++) {
    if (cities[i].id == idOfCity) {
      cityData = cities[i];
      PID = cityData.province_id;
      cityNotFund = false;
    }
  }
  if (cityNotFund) {
    return ["شهر یافت نشد"];
  }
  for (let i = 0; i < provincesLen; i++) {
    if (provinces[i].id == PID) {
      cityData.province_name = provinces[i].name;
    }
  }
  return cityData;
}
