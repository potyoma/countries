import fs from "fs/promises";
import { DATA_FILE_PATH } from "./consts";

const FIELDS = ["name", "capital", "region", "population", "flags"];

const convertCountries = countries =>
  countries?.map(
    ({
      name: { common: countryName },
      population,
      region,
      capital,
      flags,
    }) => ({
      name: countryName,
      properties: {
        population: population.toLocaleString(),
        region: region,
        capital: capital[0],
      },
      image: { src: flags.svg ?? flags.png, alt: flags.alt },
    })
  );

const convertCachedCountries = countries =>
  countries?.map(({ name, population, region, capital }) => ({
    name: name,
    properties: {
      population: population.toLocaleString(),
      region: region,
      capital: capital,
    },
    image: { src: flag, alt: `${name} flag` },
  }));

export async function getCountryListCached() {
  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH);
    const countries = JSON.parse(fileContents);
    return convertCachedCountries(countries);
  } catch {
    return [];
  }
}

export async function getCountryList() {
  try {
    const resp = await fetch(
      `https://restcountries.com/v3.1/all?fields=${FIELDS.join(",")}`
    );
    if (resp.ok) {
      const data = await resp.json();
      const converted = convertCountries(data);
      return converted;
    }
    return getCountryListCached();
  } catch {
    return getCountryListCached();
  }
}
