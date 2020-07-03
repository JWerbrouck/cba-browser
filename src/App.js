import React from 'react';
import './App.css';
import './components/keyboard/main.css'

import "./components/keyboard/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardComponent from './components/keyboard/KeyboardComponent'
function App() {
  return (
    <div className="App" >
      <div className="infoContainer">
        <p className="infoText">USE YOUR KEYBOARD AS AN ACCORDION</p>
        <ul>
          <li className="infoBullet">Press the corresponding button on your keyboard to play its accordion counterpart;</li>
          <li className="infoBullet">Currently only an AZERTY keyboard is supported (you can easily change that yourself);</li>
          <li className="infoBullet">For the connoisseurs: currently it's only "C on the first row". C on the third may follow later;</li>
          <li className="infoBullet">Download the more powerful key-blocking MIDI version <a href="https://github.com/JWerbrouck/CBA-MIDI-emulator" className="link">here</a> (desktop prototype);</li>
          <li className="infoBullet">Stay tuned for the ultimate "Accordion Hero" web MIDI app (planned in an eventual next lockdown).</li>
        </ul>
      </div>
      <div>
        <KeyboardComponent />
      </div>
    </div>
  );
}

export default App;
