import React from "react";
import Lesson from "./Lesson";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Lesson />
    </div>
  );
}

export default App;
