import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState<string>("Text");

  return (
    <>
      <div>App</div>
      <textarea
        name="textarea"
        id="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>Text is {text}</h1>
    </>
  );
};

export default App;
