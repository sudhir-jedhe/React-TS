import React from "react";

export const useNotification = () => {
  return {
    showNotification: React.useCallback(
      ({ id, message, setTestarr, counter, nottype }) => {
        counter.current = counter.current + 1;
        const temp = { id: counter.current, message: nottype };
        setTestarr((e) => [...e, temp]);
        console.log(id, message);
      },
      []
    ),
  };
};
