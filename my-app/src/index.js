import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reminders from './Reminders/Reminders';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reminders />, document.getElementById('root'));
registerServiceWorker();
