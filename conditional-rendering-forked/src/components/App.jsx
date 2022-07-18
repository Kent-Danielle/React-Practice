import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = true;

function App() {
  return (
    //<div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    // Alternatively you can also use && and take advantage of shortcircuiting:
    isLoggedIn && (
      <div className="container">
        <Login />
      </div>
    )
  );
}

export default App;
