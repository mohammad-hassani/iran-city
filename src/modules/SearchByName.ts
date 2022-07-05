// will search cities of province by province name
import * as cities from '../../json/cities.json';
import * as provinces from '../../json/provinces.json';

export default function citiesOfProvince(nameOfProvince:string): string[] {
    let PID
    let Pcities:any = [];
    let provinceNotFund:boolean = true;
    for (let i = 0; i < Object.keys(provinces).length-1; i++) {
        if (provinces[i].name == nameOfProvince) {
            PID = provinces[i].id;
            provinceNotFund = false;
        }
      }
    if (provinceNotFund) {
        return ['استان یافت نشد'];
    }
    for (let i = 0; i < Object.keys(cities).length-1; i++) {
      if (cities[i].province_id == PID) {
        Pcities.push(cities[i]);
      }
    }
    return Pcities;
  }