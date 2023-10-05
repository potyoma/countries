import { useCallback, useEffect } from "react";

const EVENT_TYPE = "click";

export default function useClickOutside(ref, callback) {
  const handleClickOutside = useCallback(
    event => {
      event.type === EVENT_TYPE &&
        ref.current &&
        !ref.current.contains(event.target) &&
        callback?.();
    },
    [callback]
  );

  useEffect(() => {
    setTimeout(() => document.addEventListener(EVENT_TYPE, handleClickOutside));

    return () => document.removeEventListener(EVENT_TYPE, handleClickOutside);
  }, [handleClickOutside]);
}
