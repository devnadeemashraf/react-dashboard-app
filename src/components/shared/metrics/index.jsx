import * as styles from "./metrics.module.scss";

import { useEffect, useRef, useState } from "react";

import useDebouncedEvents from "@/hooks/useDebouncedEvents";

// In Milliseconds
const METRICS_DEBOUNCE_DURATION = 120;

const Metrics = () => {
  const metricsRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });

  /**
   * Handle Mouse Down on Metrics Component
   */
  const handleOnMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  /**
   * Handle Mouse Up on Metrics Component
   */
  const handleOnMouseUp = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  /**
   * Handle Mouse Move on Metrics Component
   */
  const handleOnMouseMove = (e) => {
    e.preventDefault();
    if (dragging && metricsRef.current) {
      const updatedX = e.clientY - metricsRef.current.offsetHeight;
      const updatedY = e.clientX - metricsRef.current.offsetWidth;

      setCoord({
        x: updatedX,
        y: updatedY,
      });
    }
  };

  /**
   * Add Event Listener to the Document
   * Reason why 'Document' is important is because
   * if the Move Listener is only on the Metrics Component, the drag
   * will only be detected as long as the cursor is on the Metrics Component and
   * not the entire Document
   */
  useEffect(() => {
    if (dragging) {
      document.addEventListener("mouseup", handleOnMouseUp);
    }

    return () => {
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [dragging]);

  /**
   * Using Custom Hook to Debounce Mouse Move Event
   */
  useDebouncedEvents("mousemove", handleOnMouseMove, METRICS_DEBOUNCE_DURATION);

  return (
    <span
      ref={metricsRef}
      onMouseDown={handleOnMouseDown}
      style={{
        top: `${coord.x}px`,
        left: `${coord.y}px`,
      }}
      className={`${styles.metrics}`}
    >
      Hello Metrics
    </span>
  );
};

export default Metrics;
