import { useState } from "react";

const IDLE = "idle";
const PENDING = "pending";
const SUCCESS = "success";
const ERROR = "error";

const useAsync = (fn) => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(IDLE);

  const handleCallback = () => {
    console.log("callback ------");
    setStatus(PENDING);
    fn()
      .then((res) => {
        setStatus(SUCCESS);
        setValue(res);
      })
      .catch((err) => {
        setError(err);
        setStatus(ERROR);
      });
  };

  return {
    value,
    error,
    status,
    execute: handleCallback,
  };
};

export default useAsync;
