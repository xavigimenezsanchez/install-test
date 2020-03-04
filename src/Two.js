import React, {useState} from 'react';



function One() {
  const [dummy, setDummy] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <input id="intro" onChange={e=> setDummy(e.target.value)} type="number" />
        <button onClick={e=>setDummy(null)} >Clear</button>
        <p>{dummy}</p>
      </header>
    </div>
  );
}

export default One;
