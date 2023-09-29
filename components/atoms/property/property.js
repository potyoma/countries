import { capitalizeFirst } from "@/lib/utils/capitalize-first";
import s from "./property.module.css";

export default function Property({ name, value }) {
  return (
    <div className={s.property}>
      <span className={s.name}>{capitalizeFirst(name)}:</span>
      <span className={s.value}>{value}</span>
    </div>
  );
}
