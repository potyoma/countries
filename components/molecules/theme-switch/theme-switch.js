"use client";

import { Button } from "@/components/atoms/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { getInitialColorMode } from "@/lib/helpers/getInitialColorMode";
import { capitalizeFirst } from "@/lib/utils/capitalize-first";
import { faMoon as RegularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import s from "./theme-switch.module.css"

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(getInitialColorMode());

  const isLightThemeActive = activeTheme === "light";

  const inactiveTheme = isLightThemeActive ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("color-mode", activeTheme);
  }, [activeTheme]);

  return (
    <Button
      type="button"
      transparent
      onClick={() => setActiveTheme(inactiveTheme)}
      icon={
        <FontAwesomeIcon
          icon={isLightThemeActive ? SolidMoon : RegularMoon}
          aria-hidden
        />
      }
      title={`Change to ${inactiveTheme} mode`}
      aria-label={`Change to ${inactiveTheme} mode`}
    >
      <span className={s.text}>{capitalizeFirst(inactiveTheme)} Mode</span>
    </Button>
  );
}
