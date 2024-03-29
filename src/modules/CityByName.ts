// will return all city data by searching name of city
import * as cities from '../../list-of-cities-in-Iran/json/cities.json';
import * as provinces from '../../list-of-cities-in-Iran/json/provinces.json';

export default function cityByName(nameOfCity: string): string[] {
  let PID;
  let cityData: any = [];
  let cityNotFund: boolean = true;
  const citiesLen = Object.keys(cities).length - 1;
  const provincesLen = Object.keys(provinces).length - 1;
  for (let i = 0; i < citiesLen; i++) {
    if (cities[i].name === nameOfCity) {
      cityData = cities[i];
      PID = cityData.province_id;
      cityNotFund = false;
    }
  }
  if (cityNotFund) {
    return ['شهر یافت نشد'];
  }
  for (let i = 0; i < provincesLen; i++) {
    if (provinces[i].id === PID) {
      cityData.province_name = provinces[i].name;
    }
  }
  return cityData;
}
