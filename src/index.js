import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

console.log(store, App);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
