import { BASE_URL, FULL_FIELDS } from "./consts";

export async function getCountry(name) {
  try {
    const query = `name/${name}?fllText=true`;
    const resp = await fetch(
      `${BASE_URL}${query}&fields=${FULL_FIELDS.join(",")}`
    );
    const countries = await resp.json();

    return countries?.[0];
  } catch {}
}
