import s from "./dropdown.module.css";
import { Button } from "../button";
import { useCallback, useRef, useState } from "react";
import clsx from "clsx";
import { useClickOutside } from "@/hooks";

export default function Dropdown({ options, label, onSelect, selected }) {
  const [active, setActive] = useState();

  const containerRef = useRef();

  const toggle = useCallback(
    value => setActive(curr => (value === undefined ? !curr : value)),
    []
  );

  const handleSelect = opt => {
    onSelect?.(opt);
    toggle();
  };

  useClickOutside(containerRef, () => toggle(false), active);

  return (
    <div className={s.container} ref={containerRef}>
      <Button
        className={s.button}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={toggle}
      >
        {selected?.name || label}
      </Button>
      <div className={clsx(s.dropdownContainer, active && s.active)}>
        <ul className={s.dropdown} role="listbox">
          {options.map(opt => (
            <li
              role="option"
              aria-selected={opt.value === selected?.value}
              key={opt.value}
            >
              <Button
                className={s.dropdownItem}
                onClick={() => handleSelect(opt)}
              >
                {opt.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
