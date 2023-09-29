import { Heading } from "@/components/atoms/heading";
import s from "./header.module.css";
import { ThemeSwitcher } from "@/components/molecules/theme-switch";

export default function Header() {
  return (
    <header className={s.header}>
      <Heading level="h2">Where in the World?</Heading>
      <ThemeSwitcher />
    </header>
  );
}
