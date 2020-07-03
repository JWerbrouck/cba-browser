import React from 'react';
import './App.css';
import './components/keyboard/main.css'

import "./components/keyboard/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardComponent from './components/keyboard/KeyboardComponent'
function App() {
  return (
    <div className="App" >
      <div>
      <p className="infoText">Use your keyboard as an accordion keyboard</p>
      </div>
      <div>
        <KeyboardComponent/>
      </div>
    </div>
  );
}

export default App;
