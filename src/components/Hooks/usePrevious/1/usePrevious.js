import React, { useState, useRef, useEffect } from "react";

import React, { useState, useRef, useEffect } from "react";
export default function usePrevious(count) {
  const prevRef = useRef(count);
  const [state, setState] = useState(prevRef.current);
  useEffect(() => {
    setState(prevRef.current);
    prevRef.current = count;
  }, [count]);
  return state;
}
