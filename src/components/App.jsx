import React from "react";
import Lesson from "./Lesson";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar admin={true} />
      </header>
      <Lesson />
    </div>
  );
}

export default App;
