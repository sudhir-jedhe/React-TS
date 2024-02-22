import { useState } from "react";
const useCopyToClipboard = () => {
  const [value, setValue] = useState("");
  function copy(txt) {
    setValue(txt);
  }
  return [value, copy];
};

export default useCopyToClipboard;
