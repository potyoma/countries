import { getCountry } from "@/lib/data/get-country";
import s from "./country.module.css";
import BackButton from "@/components/molecules/back-button/back-button";
import Image from "next/image";

export default async function Page({ params }) {
  const country = await getCountry(params.slug);

  if (!country) return <div>{`notFound`}</div>;

  return (
    <div className={s.container}>
      <BackButton />
      <Image
        src={country.flags.svg}
        width="0"
        height="0"
        className={s.flag}
        alt={country.flags.alt}
      />
      {JSON.stringify(country)}
    </div>
  );
}
