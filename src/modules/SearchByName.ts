// will search cities of province by province name
import * as cities from '../../list-of-cities-in-Iran/json/cities.json';
import * as provinces from '../../list-of-cities-in-Iran/json/provinces.json';

export default function searchByName(nameOfProvince: string): string[] {
  let PID;
  let provinceNotFund: boolean = true;
  const Pcities: any = [];
  const citiesLen = Object.keys(cities).length - 1;
  const provincesLen = Object.keys(provinces).length - 1;
  for (let i = 0; i < provincesLen; i++) {
    if (provinces[i].name === nameOfProvince) {
      PID = provinces[i].id;
      provinceNotFund = false;
    }
  }
  if (provinceNotFund) {
    return ['استان یافت نشد'];
  }
  for (let i = 0; i < citiesLen; i++) {
    if (cities[i].province_id === PID) {
      Pcities.push(cities[i]);
    }
  }
  return Pcities;
}
