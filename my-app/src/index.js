import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './App'
import LandingPage from './Components/LandingPage/LandingPage.js';
import Calendar from './Components/Calendar/Calendar.js';
import Notes from './Components/Notat/Notat.js';
import Todo from './Components/ToDo/ToDo.js';
import Reminders from './Components/Reminders/Reminders.js';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={LandingPage} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/notes" component={Notes} />
      <Route path="/todo" component={Todo} />
      <Route path="/reminders" component={Reminders} />
    </App>
  </Router>,
  document.getElementById('root')
);
