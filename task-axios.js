// How to use axios https://docs.google.com/presentation/d/1JrufeLjxbBKKjWqnj1l32hcouQ3Hw-8rMIn_zzCTF7U/edit#slide=id.gec017bc9e0_0_351

// use this API
const apiUrl = 'https://swapi.dev/api/planets/?format=json'
// TASKS: 
// 1. create function downloadPlanets, which will download the data and return data.results
// 2. create function parsePlanets for extraction names of planets and return sorted array
// 3. create function savePlanets to save array of strings into file (as param) named planets.txt (you can write file with https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)
// Example of write File sync in presentation https://docs.google.com/presentation/d/1JrufeLjxbBKKjWqnj1l32hcouQ3Hw-8rMIn_zzCTF7U/edit#slide=id.gec017bc9e0_0_284

// 4. Use these functions as whole, call them and create new file with names of planets
// So, we will call downloadPlanets -> result send to parsePlanets -> result send to savePlanets


// no param, returns data.results from JSON 
let downloadPlanets;

// function with one param - array of planets from donwloadPlanets
// return sorted array of planet names
let parsePlanets;

// function with 2 params - fileName and array of planets
let savePlanets;



