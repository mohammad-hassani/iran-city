# iran-city

## iran-city is a package for list of cities in iran

The 'iran-city' package can be installed using npm with the following command:

```bash
npm install iran-city
```

Here are some examples of how to use the package:

1. Get all cities in Iran:

    ```javascript
    let iranCity = require('iran-city');
    let AllCities = iranCity.allCities();
    console.log(AllCities);
    ```

2. Get all provinces in Iran:

    ```javascript
    let iranCity = require('iran-city');
    let AllProvinces = iranCity.allProvinces();
    console.log(AllProvinces);
    ```

3. Get cities of a specific province (e.g., province ID 20):

    ```javascript
    let iranCity = require('iran-city');
    let CitiesOfProvince = iranCity.citiesOfProvince(20);
    console.log(CitiesOfProvince);
    ```

4. Search for cities by name (e.g., search for "کرمان"):

    ```javascript
    let iranCity = require('iran-city');
    let SearchByName = iranCity.searchByName('کرمان');
    console.log(SearchByName);
    ```

5. Get city information by name (e.g., get information about "رفسنجان"):

    ```javascript
    let iranCity = require('iran-city');
    let CityByName = iranCity.cityByName('رفسنجان');
    console.log(CityByName);
    ```

6. Get city information by ID (e.g., get information about city ID 766):

    ```javascript
    let iranCity = require('iran-city');
    let CityById = iranCity.cityById(766);
    console.log(CityById);
    ```

7. Get city information by slug (e.g., get information about city slug 'رفسنجان'):

    ```javascript
    let iranCity = require('iran-city');
    let CityBySlug = iranCity.CityBySlug('رفسنجان');
    console.log(CityBySlug);
    ```

8. Search for cities by slug (e.g., search for "کرمان"):

    ```javascript
    let iranCity = require('iran-city');
    let PCitiesBySlug = iranCity.PCitiesBySlug('کرمان');
    console.log(PCitiesBySlug);
    ```

**Sources:**

* [iran-city package on github](https://github.com/mohammad-hassani/iran-city)

## npmjs link: [iran-city - npm](https://www.npmjs.com/package/iran-city)

* Thanks to [@sajaddp](https://github.com/sajaddp) for the help

* made with ❤ by [Mohammad Hassani](https://hasani.id.ir)
