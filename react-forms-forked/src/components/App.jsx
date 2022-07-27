import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleClick(e) {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
