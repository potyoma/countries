"use client";

import clsx from "clsx";
import s from "./button.module.css";
import Icon from "../icon";

export default function Button({
  children,
  onClick,
  icon,
  iconPosition = "left",
  transparent,
  className,
  ...buttonProps
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(className, s.button, !transparent && s.shadow)}
      {...buttonProps}
    >
      <Icon iconPosition={iconPosition} icon={icon}>
        {children}
      </Icon>
    </button>
  );
}
