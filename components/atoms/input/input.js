import clsx from "clsx";
import Icon from "../icon/icon";
import s from "./input.module.css";

export default function Input({
  icon,
  iconPosition = "left",
  onIconClick,
  ...inputProps
}) {
  return (
    <div className={s.container}>
      <Icon
        iconPosition={iconPosition}
        icon={icon}
        className={clsx(
          s.icon,
          iconPosition === "left" ? s.iconLeft : s.iconRight
        )}
      >
        <input className={s.input}  {...inputProps} />
      </Icon>
    </div>
  );
}
