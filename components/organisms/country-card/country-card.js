import Image from "next/image";

import s from "./country-card.module.css";
import { Heading } from "@/components/atoms/heading";
import Properties from "@/components/molecules/properties/properties";

export default function CountryCard({ country, image, properties }) {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <Image
          width="0"
          height="0"
          src={image}
          layout="responsive"
          alt={`${country} flag`}
          className={s.image}
        />
      </div>
      <div className={s.info}>
        <Heading level="h2">{country}</Heading>
        <Properties properties={{ country, data: properties }} />
      </div>
    </div>
  );
}
