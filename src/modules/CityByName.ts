// will return all city data by searching name of city
import * as cities from '../../json/cities.json';
import * as provinces from '../../json/provinces.json';

export default function citiesOfProvince(nameOfCity:string): string[] {
    let PID
    let cityData:any = [];
    let cityNotFund:boolean = true;
    for (let i = 0; i < Object.keys(cities).length-1; i++) {
        if (cities[i].name == nameOfCity) {
            cityData = cities[i];
            PID = cityData.province_id;
            cityNotFund = false;
        }
    }
    if (cityNotFund) {
        return ['شهر یافت نشد'];
    }
    for (let i = 0; i < Object.keys(provinces).length-1; i++) {
      if (provinces[i].id == PID) {
        cityData.province_name = provinces[i].name;
      }
    }
    return cityData;
  }