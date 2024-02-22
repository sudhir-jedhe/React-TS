import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        data-testid="input-id"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="button-id" disabled={text.length < 3}>
        Click
      </button>
    </>
  );
};

export default App;
