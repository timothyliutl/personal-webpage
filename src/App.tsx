import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Pages/Welcome"
import AppBar from 'material-ui/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid"

interface type {
readonly name: number 
}
const name:type = {
  name: 69
}

function App() {
  return (
    <div className="App">
      <Typography variant={'h1'}>Hello There</Typography>
    </div>
  );
}

export default App;
