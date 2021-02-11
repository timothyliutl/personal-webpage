import * as React from 'react';
import './App.css';
import Welcome from "./Pages/Welcome";
import Appbar from "./Components/AppBar"

interface type {
  readonly name: string
}

function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
