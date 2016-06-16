// react / redux entry point
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import 'babel-polyfill';
import reducer from './reducer';
import App from './app/App';
import PictureFeed from './picture/PictureFeed';
import Picture from './picture/Picture';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const routes =
  <Route component={App}>
    <Route path='/' component={PictureFeed} />
    <Route path='/pictures/:picture' component={Picture} />
  </Route>

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
