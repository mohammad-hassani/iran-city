import allCities from './modules/AllCities';
import allProvinces from './modules/AllProvinces';
import citiesOfProvince from './modules/CitiesOfProvince';
import searchByName from './modules/SearchByName';
import cityByName from './modules/CityByName';
import cityById from './modules/CityById';


export {allCities, allProvinces, citiesOfProvince, searchByName, cityByName, cityById};
// will return an array of all cities
// const AllCities = allCities();
// for (let i = 0; i < AllCities.length; i++) {
//   console.log(AllCities[i]);
// }

// will return an array of all provinces
// const AllProvinces = allProvinces();
// for (let i = 0; i < AllProvinces.length; i++) {
//   console.log(AllProvinces[i]);
// }

// will return an array of all cities of a specific province by province id
// const CitiesOfProvince = citiesOfProvince(20);
// for (let i = 0; i < CitiesOfProvince.length; i++) {
//   console.log(CitiesOfProvince[i]);
// }

// will return an array of all cities of a specific province by province name
// const SearchByName = searchByName('کرمان'); // you can even use wrong name
// for (let i = 0; i < SearchByName.length; i++) {
//   console.log(SearchByName[i]);
// }

// will return all city data by searching name of city
// const CityByName = cityByName('رفسنجان'); // you can even use wrong name
// console.log(CityByName);

// will return all city data by searching id of city
// const CityById = cityById(766);
// console.log(CityById);
