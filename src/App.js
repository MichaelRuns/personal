import logo from './laugh.png';
import './App.css';
import {Test} from './test.js';
import React, {useState} from 'react';

function App() {
  const [firstTime, setFirstTime] = useState(true);
  return (
    firstTime?
    <div className="App-header">
      <div>Welcome!</div>
      <button className='Welcome-button' onClick={() => setFirstTime(!firstTime)}>Enter</button>
    </div>
    :
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test/>
        <button className='Welcome-button' onClick={() => setFirstTime(!firstTime)} style={{backgroundColor:'red'}}>return</button>
      </header>
    </div>
    
  );
}

export default App;
