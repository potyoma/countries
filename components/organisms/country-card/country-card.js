import Image from "next/image";

import s from "./country-card.module.css";
import { Heading } from "@/components/atoms/heading";
import Properties from "@/components/molecules/properties/properties";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export default function CountryCard({ country, image, properties }) {
  return (
    <Link href={`/country/${country}`}>
      <div className={s.card}>
        <Image
          width="0"
          height="0"
          src={image.src}
          alt={image.alt}
          className={s.image}
        />
        <div className={s.info}>
          <Heading level="h2">{country}</Heading>
          <Properties properties={properties} />
        </div>
      </div>
    </Link>
  );
}
