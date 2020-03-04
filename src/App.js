import React from "react";

import { Board } from "./components/Board";

import "./styles.css";

export default function App() {
  console.log("app")
  return (
    <div className="App">
      <h3>TICK TACK TOES</h3>
      <Board />
    </div>
  );
}
