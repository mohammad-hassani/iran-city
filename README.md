# iran-city

## Installation

```bash
npm install iran-city
```

## Usage example

    var iranCity = require('iran-city');
    var AllCities = iranCity.allCities();
    var AllProvinces = iranCity.allProvinces();
    var CitiesOfProvince = iranCity.citiesOfProvince(20);
    var SearchByName = iranCity.searchByName('کرمان');
    var CityByName = iranCity.cityByName('رفسنجان');
    var CityById = iranCity.cityById(766);


## Modules

    allCities() : will return an array of all cities

    allProvinces() : will return an array of all provinces

    citiesOfProvince(provinceID) : will return an array of all cities of a specific province by province id

    searchByName('province name') : will return an array of all cities of a specific province by province name

    cityByName('city name') : will return all city data by searching name of city

    cityById(cityID) : will return all city data by searching id of city

#### you can find examples in src/index.js

### for make dist folder:

```npx tsc --resolveJsonModule```

### for run index file

```node dist/src/index.js```


### Thanks to @sajaddp for the help 