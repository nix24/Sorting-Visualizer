import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css";
import Sort from "./components/Sort";
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Sorting visulaizer</h1>
      </div>
      <Sort />

      <div className="footer">{/* showcase github below */}</div>
    </div>
  );
}
export default App
