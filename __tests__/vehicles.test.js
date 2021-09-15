import * as fs from "fs/promises";
import { downloadAndSaveVehicles } from "../utils/axiosUtils";

describe("downloadAndSaveVehicles", () => {
  afterAll(async () => {
    await fs.rm("./starWarsVehicles.json");
  });
  test('downloads data and create file "starWarsVehicles.json" in root of project', async () => {
    await downloadAndSaveVehicles("starWarsVehicles.json");
    expect(await fs.readdir(".")).toContain("starWarsVehicles.json");
  });
});
