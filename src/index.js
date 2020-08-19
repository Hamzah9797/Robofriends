import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import 'tachyons';
//import {robots} from './robots';
//import CardList from './CardList';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App/>
  ,document.getElementById('root')
);
serviceWorker.register();
