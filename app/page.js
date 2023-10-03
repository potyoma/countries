import { getCountryList } from "@/lib/data/get-country-list";
import s from "./page.module.css";
import CountryCard from "@/components/organisms/country-card";
import SearchForm from "@/components/organisms/search-form";

export default async function Home() {
  const countries = await getCountryList();

  return (
    <main className={s.main}>
      <SearchForm />
      <div className={s.cards}>
        {countries?.map(c => (
          <CountryCard
            key={c.name}
            country={c.name}
            properties={c.properties}
            image={c.image}
          />
        ))}
      </div>
    </main>
  );
}
