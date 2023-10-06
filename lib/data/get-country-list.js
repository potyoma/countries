import fs from "fs/promises";
import { DATA_FILE_PATH, BASE_URL, FIELDS } from "./consts";

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
      properties: [
        { name: "population", value: population.toLocaleString() },
        { name: "region", value: region },
        { name: "capital", value: capital[0] },
      ],
      image: { src: flags.svg ?? flags.png, alt: flags.alt },
    })
  );

const convertCachedCountries = countries =>
  countries?.map(({ name, population, region, capital }) => ({
    name: name,
    properties: [
      { name: "population", value: population.toLocaleString() },
      { name: "region", value: region },
      { name: "capital", value: capital },
    ],
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

const buildQuery = ({ filter, search, page }) => {
  if (filter) return `region/${filter}`;
  if (search) return `name/${search}`;
  return "all";
};

export async function getCountryList(searchParams) {
  try {
    const resp = await fetch(
      `${BASE_URL}${buildQuery(searchParams)}?fields=${FIELDS.join(",")}`
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
