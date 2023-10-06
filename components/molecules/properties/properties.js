import { Property } from "@/components/atoms/property";
import s from "./properties.module.css";

export default function Properties({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <ul className={s.list}>
      {properties.map(({ name, value }) => (
        <li key={properties.country + name}>
          <Property name={name} value={value} />
        </li>
      ))}
    </ul>
  );
}
