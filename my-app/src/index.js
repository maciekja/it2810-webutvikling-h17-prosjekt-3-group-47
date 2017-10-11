import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './App'
import LandingPage from './Components/LandingPage/LandingPage.js';
import Stopwatch from './Components/Stopwatch/Stopwatch.js';
import Notes from './Components/Notat/Notat.js';
import Todo from './Components/ToDo/ToDo.js';
import Reminders from './Components/Reminders/Reminders.js';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={LandingPage} />
      <Route path="/landingPage" component={LandingPage} />
      <Route path="/stopwatch" component={Stopwatch} />
      <Route path="/notes" component={Notes} />
      <Route path="/todo" component={Todo} />
      <Route path="/reminders" component={Reminders} />
    </App>
  </Router>,
  document.getElementById('root')
);
