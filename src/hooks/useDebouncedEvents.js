import { useCallback, useEffect } from "react";

import { debounceFunction } from "@/lib/utils";

const useDebouncedEvents = (event, eventHandler, delay = 350) => {
  /**
   * Memoized Debounce Handler Function
   */
  const debouncededEventHandle = useCallback(
    debounceFunction(delay, eventHandler),
    [eventHandler, delay]
  );

  /**
   * Add Event Listener when Component Loads
   */
  useEffect(() => {
    document.addEventListener(event, debouncededEventHandle);

    /**
     * Cleanup Function
     */
    return () => {
      document.removeEventListener(event, debouncededEventHandle);
    };
  }, [event, debouncededEventHandle]);
};

export default useDebouncedEvents;
