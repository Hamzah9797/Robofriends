import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
//import Card from './Card';
import 'tachyons';
//import {robots} from './robots';
//import CardList from './CardList';
import App from './containers/App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {searchRobots,requestRobots} from './reducers';
import * as serviceWorker from './serviceWorker';

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots})
const store=createStore (rootReducer,applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
	<Provider store={store}>
  <App/>
  </Provider>
  ,document.getElementById('root')
);
serviceWorker.register();
