"use client";

import clsx from "clsx";
import s from "./button.module.css";

function ButtonIcon({ icon }) {
  if (!icon) return null;

  return <span className={s.icon}>{icon}</span>;
}

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
      {iconPosition === "left" && <ButtonIcon icon={icon} />}
      {children}
      {iconPosition === "right" && <ButtonIcon icon={icon} />}
    </button>
  );
}
