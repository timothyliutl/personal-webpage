import * as React from 'react';
import './App.css';
import Welcome from "./Pages/Welcome";
import Appbar from "./Components/AppBar"
import CurrentProjects from "./Components/CurrentProjects"
import ProjectArticle from "./Pages/ProjectArticle"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//TODO: prototype the website out on figma first

function App() {
  return (
    <div className="App" style={{marginTop:100}}>
      <Route path={"/"} exact>
        <Welcome></Welcome>
      </Route>
      <Route path={"/article"} exact>
        <ProjectArticle></ProjectArticle>
      </Route>
      
      
      
    </div>
  );
}

export default App;
