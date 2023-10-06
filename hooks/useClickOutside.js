import { useCallback, useEffect } from "react";

const EVENT_TYPE = "click";

export default function useClickOutside(ref, callback, shouldListen = true) {
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
    if (shouldListen) {
      setTimeout(() =>
        document.addEventListener(EVENT_TYPE, handleClickOutside)
      );

      return () => document.removeEventListener(EVENT_TYPE, handleClickOutside);
    }
  }, [handleClickOutside, shouldListen]);
}
