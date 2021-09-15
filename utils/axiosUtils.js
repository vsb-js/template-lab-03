import axios from "axios";
import * as fs from "fs/promises";

const downloadAndSaveVehicles = async () => {
  const fileName = "starWarsVehicles.json";
  // download json and store it in variable
  const data = await axios.get("https://swapi.dev/api/vehicles/?format=json");
  await fs.writeFile(fileName, JSON.stringify(data.data.results));

  console.log(`🛰 🚀 🛸 ${fileName} saved!`);
};

// export it due tests
export { downloadAndSaveVehicles };
