import clsx from "clsx";
import s from "./heading.module.css";

const LEVELS = ["h1", "h2", "h3", "h4", "h5", "h6"];
const DEFAULT_LEVEL = "h3";

export default function Heading({ children, level = DEFAULT_LEVEL }) {
  const levelLower = level?.toLowerCase();
  const Component = LEVELS.includes(levelLower) ? levelLower : DEFAULT_LEVEL;

  return (
    <Component className={clsx(s.heading, s[levelLower])}>{children}</Component>
  );
}
