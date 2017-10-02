import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo/Todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
