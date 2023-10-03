import clsx from "clsx";
import s from "./icon.module.css";

const IconComponent = ({ icon, className, ...iconProps }) => (
  <span className={clsx(className, s.icon)} {...iconProps}>
    {icon}
  </span>
);

export default function Icon({ icon, children, iconPosition, ...iconProps }) {
  if (!icon) return null;

  if (!children) return <IconComponent icon={icon} {...iconProps} />;

  return (
    <>
      {iconPosition === "left" && <IconComponent icon={icon} {...iconProps} />}
      {children}
      {iconPosition === "right" && <IconComponent icon={icon} {...iconProps} />}
    </>
  );
}
