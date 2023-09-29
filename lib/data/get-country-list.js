import fs from "fs/promises";
import { DATA_FILE_PATH } from "./consts";

export async function getCountryList() {
  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH);
    const countries = JSON.parse(fileContents);
    return countries?.map(c => ({
      name: c.name,
      properties: {
        population: c.population,
        region: c.region,
        capital: c.capital,
      },
      image: c.flag,
    }));
  } catch {
    return [];
  }
}
