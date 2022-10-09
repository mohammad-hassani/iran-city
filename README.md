# iran-city

## Installation

```bash
npm install iran-city
```

## Usage example

```js
    let iranCity = require('iran-city');
    let AllCities = iranCity.allCities();
    let AllProvinces = iranCity.allProvinces();
    let CitiesOfProvince = iranCity.citiesOfProvince(20);
    let SearchByName = iranCity.searchByName('کرمان');
    let CityByName = iranCity.cityByName('رفسنجان');
    let CityById = iranCity.cityById(766);
```

## Modules

```js
    allCities() // will return an array of all cities

    allProvinces() // will return an array of all provinces

    citiesOfProvince(provinceID) // will return an array of all cities of a specific province by province id

    searchByName('province name') // will return an array of all cities of a specific province by province name

    cityByName('city name') // will return all city data by searching name of city

    cityById(cityID) // will return all city data by searching id of city
```

* You can find examples in `src/index.js`

* For make dist folder

```shell
npx tsc --resolveJsonModule
```

* For run index file

```shell
node dist/src/index.js
```

* Thanks to [@sajaddp](https://github.com/sajaddp) for the help
