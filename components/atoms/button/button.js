"use client";

import clsx from "clsx";
import s from "./button.module.css";
import Icon from "../icon";
import Link from "next/link";

export default function Button({
  children,
  onClick,
  icon,
  iconPosition = "left",
  transparent,
  className,
  link,
  ...buttonProps
}) {
  const Component = link && !onClick ? Link : "button";

  return (
    <Component
      onClick={onClick}
      className={clsx(
        s.button,
        !transparent && s.shadow,
        transparent && s.transparent,
        className
      )}
      href={link}
      {...buttonProps}
    >
      <Icon iconPosition={iconPosition} icon={icon}>
        {children}
      </Icon>
    </Component>
  );
}
