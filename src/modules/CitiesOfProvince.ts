// will return the list of data of cities of a province
import * as cities from '../../json/cities.json';

export default function citiesOfProvince(PID:number): string[] {
    let Pcities:any = [];
    for (let i = 0; i < Object.keys(cities).length-1; i++) {
      if (cities[i].province_id == PID) {
        Pcities.push(cities[i]);
      }
    }
    return Pcities;
  }