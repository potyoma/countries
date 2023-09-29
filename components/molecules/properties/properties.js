import { Property } from "@/components/atoms/property";
import s from "./properties.module.css";

export default function Properties({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <ul className={s.list}>
      {Object.entries(properties.data).map(([key, value]) => (
        <li key={properties.country + key}>
          <Property name={key} value={value} />
        </li>
      ))}
    </ul>
  );
}
