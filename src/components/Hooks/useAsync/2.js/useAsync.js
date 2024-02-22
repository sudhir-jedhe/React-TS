import { useState } from "react";
import axios from "axios";

const useAsync = (apiend) => {
  const [allthefunctionquery, setfun] = useState({
    value: null,
    status: "idle",
    error: null,
  });
  const execute = async () => {
    try {
      setfun((prev) => {
        return {
          ...prev,
          status: "pending",
        };
      });
      const res = await apiend();
      setfun((prev) => {
        return {
          ...prev,
          status: "success",
          value: res,
        };
      });
    } catch (error) {
      setfun((prev) => {
        return {
          ...prev,
          status: "error",
          error: error.message,
        };
      });
    }
  };

  return { ...allthefunctionquery, execute };
};

export default useAsync;
