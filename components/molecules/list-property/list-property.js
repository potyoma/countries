import s from "./list-property.module.css";

import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";

export default function ListProperty({ name, values }) {
  return (
    <div className={s.container}>
      <Heading>{name}:</Heading>
      <ul className={s.list}>
        {values?.map(({ name, href }) => (
          <li key={name} className={s.listItem}>
            <Button link={href}>{name}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
