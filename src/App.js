import React, { useState, useEffect }  from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt.js";
import logo from './logo.svg';
import One from './One';
import Two from './Two';
import './App.css';


function App() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(true);
  const hide = () => setVisibleState(false);

  useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );
  return (
      <Router >
        <nav>
        <div onClick={hide} hidden={!isVisible}>
          <button onClick={hide}>Close</button>
          Hello! Wanna add to homescreen?
          <button onClick={promptToInstall}>Add to homescreen</button>
        </div>
          <ul>
            <li>
            <Link to="/install-test/one">One</Link>
            </li>
            <li>
            <Link to="/install-test/two">Two</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/install-test/one" component={One} />
          <Route path="/install-test/two" component={Two} />
          <Route path="/install-test">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Route>
        </Switch>
        
      </Router>
  );
}

export default App;
