// Task: Display average weight (mass) of people on each planet.

// Continue with the code you have written in task-axios.
// Eeach planet has list of residents.
// Example of the API response per one planet:
/* 
    {
      "name": "Kamino",
      "rotation_period": "27",
      "orbital_period": "463",
      "diameter": "19720",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "ocean",
      "surface_water": "100",
      "population": "1000000000",
      "residents": [
        "https://swapi.dev/api/people/22/",
        "https://swapi.dev/api/people/72/",
        "https://swapi.dev/api/people/73/"
      ],
      "films": [
        "https://swapi.dev/api/films/5/"
      ],
      "created": "2014-12-10T12:45:06.577000Z",
      "edited": "2014-12-20T20:58:18.434000Z",
*/

// You need to query each person from each planet like this: https://swapi.dev/api/people/22/?format=json
// Use promise all to query all them at once (per planet). In case of kamiko, it would be 3 requests...
// Be caseful the mass can be "unknown" in that case, don't count it! https://swapi.dev/api/people/73/?format=json

// Example output to console:

// Planet: Kamiko
// Number of residents: 3
// Average mass of resident:  83.1 
// 
// Planet: ...
// ...