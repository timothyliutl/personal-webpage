import * as React from 'react';
import './App.css';
import Welcome from "./Pages/Welcome";
import Appbar from "./Components/AppBar"
import CurrentProjects from "./Components/CurrentProjects"

interface type {
  readonly name: string
}

function App() {
  return (
    <div className="App" style={{paddingLeft:"30hr"}}>
      <Appbar></Appbar>
      <Welcome></Welcome>
      <div style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
        <CurrentProjects></CurrentProjects>
      </div>
      
    </div>
  );
}

export default App;
