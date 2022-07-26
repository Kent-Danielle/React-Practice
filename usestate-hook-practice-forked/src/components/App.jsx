import React, { useState } from "react";

function App() {
  let time_now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(time_now);

  function updateTime() {
    time_now = new Date().toLocaleTimeString();
    setTime(time_now);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
