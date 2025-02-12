import { useCallback, useEffect } from "react";

import { throttleFunction } from "@/lib/utils";

const useThrottledEvents = (event, eventHandler, duration = 350) => {
  /**
   * Memoized Throttle Handler Function
   */
  const throttledEventHandle = useCallback(
    throttleFunction(duration, eventHandler),
    [eventHandler, duration]
  );

  /**
   * Add Event Listener when Component Loads
   */
  useEffect(() => {
    document.addEventListener(event, throttledEventHandle);

    /**
     * Cleanup Function
     */
    return () => {
      document.removeEventListener(event, throttledEventHandle);
    };
  }, [event, throttledEventHandle]);
};

export default useThrottledEvents;
