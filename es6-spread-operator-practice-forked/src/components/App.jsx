import React, { useState } from "react";

function App() {
  const [reminder, setReminder] = useState("");
  const [reminderList, setReminderList] = useState([]);

  function getReminder(event) {
    setReminder(event.target.value);
  }

  function addReminder(event) {
    setReminderList((prevArr) => {
      return [...prevArr, reminder];
    });

    setReminder("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getReminder} value={reminder} />
        <button onClick={addReminder}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {reminderList.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
