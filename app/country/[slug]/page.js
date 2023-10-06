import { getCountry } from "@/lib/data/get-country";
import s from "./country.module.css";
import BackButton from "@/components/molecules/back-button/back-button";
import Image from "next/image";
import { Heading } from "@/components/atoms/heading";
import Properties from "@/components/molecules/properties/properties";
import { extractProperties } from "@/lib/helpers";
import ListProperty from "@/components/molecules/list-property/list-property";

const MAIN_PROPERTIES = [
  "native name",
  "population",
  "region",
  "sub region",
  "capital",
];
const ADDITIONAL_PROPERTIES = ["top level doamin", "currencies", "languages"];

const selectProperties = (properties, filter) =>
  properties.filter(({ name }) => filter.includes(name.toLowerCase()));

export default async function Page({ params }) {
  const country = await getCountry(params.slug);

  if (!country) return <div>{`notFound`}</div>;

  const properties = extractProperties(country);

  return (
    <div className={s.container}>
      <BackButton className={s.button} />
      <Image
        src={country.flags.svg}
        width="0"
        height="0"
        className={s.flag}
        alt={country.flags.alt}
      />
      <div className={s.info}>
        <Heading className={s.heading} level="h2">
          {country.name.common}
        </Heading>
        <div className={s.properties}>
          <Properties
            properties={selectProperties(properties, MAIN_PROPERTIES)}
          />
          <Properties
            properties={selectProperties(properties, ADDITIONAL_PROPERTIES)}
          />
          <ListProperty name="Borders" values={country.borders} />
        </div>
      </div>
    </div>
  );
}
