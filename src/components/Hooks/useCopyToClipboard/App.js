import { useState } from "react";

import useCopyToClipboard from "./useCopyToClipboard";

export default function App() {
  const [value, copy] = useCopyToClipboard();
  const [text, setText] = useState("");

  const handleClick = () => {
    copy(text);
  };

  const handleInputChange = (e) => {
    const { target: { value = "" } = {} } = e;

    setText(value);
  };

  return (
    <main>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleClick}>Copy Text</button>
      <p>Copied value: {value || "Nothing is copied yet"}</p>
    </main>
  );
}
