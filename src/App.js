import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App({}) {
  const [dummy, setDummy] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input id="intro" onChange={e=> setDummy(e.target.value)} type="number" />
        <p>{dummy}</p>
      </header>
    </div>
  );
}

export default App;
