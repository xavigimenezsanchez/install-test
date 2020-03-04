import React  from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import One from './One';
import Two from './Two';
import './App.css';


function App() {
  //const match = useRouteMatch();
  //console.log(match.url)

  return (
    <Router>
      <nav>
        <ul>
          <li>
          <Link to="/one">One</Link>
          </li>
          <li>
          <Link to="/two">Two</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/one">
          <One />
        </Route>
        <Route path="/two">
          <Two />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
