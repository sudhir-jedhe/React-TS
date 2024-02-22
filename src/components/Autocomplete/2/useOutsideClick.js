import { useEffect, useRef } from "react";

const useOutsideClick = (onOutsideClick) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  });

  return ref;
};

export default useOutsideClick;
