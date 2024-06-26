import React, { useState } from "react";

const countWords = (text) => {
  if (text.length === 0) return 0;
  return text.trim().split(/\s+/).length;
};

const App = () => {
  const [text, setText] = useState("");
  return (
    <>
      <textarea
        data-testid="textarea-id"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1 data-testid="output-id">
        Your article has {countWords(text)}{" "}
        {countWords(text) === 1 ? "word" : "words"}
      </h1>
    </>
  );
};

export default App;
