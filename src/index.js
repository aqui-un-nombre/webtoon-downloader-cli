import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faBinoculars, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faBinoculars, faSearch);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
