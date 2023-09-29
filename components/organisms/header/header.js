"use client";

import { Heading } from "@/components/atoms/heading";
import s from "./header.module.css";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("../../molecules/theme-switch"),
  {
    ssr: false,
  }
);

export default function Header() {
  return (
    <header className={s.header}>
      <Heading level="h2">Where in the World?</Heading>
      <ThemeToggle />
    </header>
  );
}
