"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityById = exports.cityByName = exports.searchByName = exports.citiesOfProvince = exports.allProvinces = exports.allCities = void 0;
const AllCities_1 = __importDefault(require("./modules/AllCities"));
exports.allCities = AllCities_1.default;
const AllProvinces_1 = __importDefault(require("./modules/AllProvinces"));
exports.allProvinces = AllProvinces_1.default;
const CitiesOfProvince_1 = __importDefault(require("./modules/CitiesOfProvince"));
exports.citiesOfProvince = CitiesOfProvince_1.default;
const SearchByName_1 = __importDefault(require("./modules/SearchByName"));
exports.searchByName = SearchByName_1.default;
const CityByName_1 = __importDefault(require("./modules/CityByName"));
exports.cityByName = CityByName_1.default;
const CityById_1 = __importDefault(require("./modules/CityById"));
exports.cityById = CityById_1.default;
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
