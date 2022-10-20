// will return a list of all provinces
import * as provinces from '../../list-of-cities-in-Iran/json/provinces.json';

export default function AllProvinces(): string[] {
  const provincesArray: any = [];
  const provincesLen = Object.keys(provinces).length - 1;
  for (let i = 0; i < provincesLen; i++) {
    provincesArray.push(provinces[i]);
  }
  return provincesArray;
}
