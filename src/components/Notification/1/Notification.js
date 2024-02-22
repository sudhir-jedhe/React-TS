import { useMemo, useState, useRef, useEffect } from "react";

import { removeNotification } from "./state/actions";
import { computeNotificationConfigBasedOnType } from "./utils";

const Notification = ({ message, type, id, dispatch }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef();
  const { classes } = useMemo(
    () => computeNotificationConfigBasedOnType(type),
    [type]
  );

  const handleStartTimer = () => {
    timerRef.current = setInterval(() => {
      setWidth((previousWidth) => {
        if (previousWidth < 100) {
          return previousWidth + 0.5;
        }

        handleCloseNotification();
        return previousWidth;
      });
    }, 20);
  };

  const handleCloseNotification = () => {
    setExit(true);
    handlePauseTimer();

    setTimeout(() => dispatch(removeNotification(id)), 500);
  };

  const handlePauseTimer = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${exit ? "exit" : ""} ${classes}`}
    >
      <p>{message}</p>
      <div className="progress-bar" style={{ width: `${width}%` }} />
    </div>
  );
};

export default Notification;
