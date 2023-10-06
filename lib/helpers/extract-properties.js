const joinObjectValues = (obj, selector) =>
  Object.values(obj)
    .flatMap(val => selector?.(val) ?? val)
    .join(", ");

export default function extractProperties(country) {
  return [
    [
      "Native Name",
      joinObjectValues(country.name.nativeName, val => val.official),
    ],
    ["Population", country.population.toLocaleString()],
    ["Region", country.region],
    ["Sub Region", country.subregion],
    ["Capital", country.capital[0]],
    ["Top Level Domain", country.tld],
    ["Currencies", joinObjectValues(country.currencies, val => val?.name)],
    ["Languages", joinObjectValues(country.languages)],
  ].map(([name, value]) => ({
    name,
    value,
  }));
}
