import { BASE_URL, FULL_FIELDS } from "./consts";

async function getCountriesByCodes(codes) {
  try {
    const query = `alpha?codes=${codes.join(",")}`;
    const resp = await fetch(
      `${BASE_URL}${query}&fields=${FULL_FIELDS.join(",")}`
    );
    if (!resp.ok) throw "Error";
    return await resp.json();
  } catch {}
}

export async function getCountry(name) {
  try {
    const query = `name/${name}?fllText=true`;
    const resp = await fetch(
      `${BASE_URL}${query}&fields=${FULL_FIELDS.join(",")}`
    );
    const countries = await resp.json();
    const country = countries?.[0];

    const borderCountries = await getCountriesByCodes(country?.borders);

    country.borders = borderCountries?.map(bc => ({
      name: bc.name.common,
      href: `/country/${bc.name.common}`,
    }));

    return country;
  } catch {}
}
