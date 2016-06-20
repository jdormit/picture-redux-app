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
import {PictureFeedContainer} from './picture/PictureFeed';
import {PictureContainer} from './picture/Picture';
import {NewPictureFormContainer} from './picture/NewPictureForm';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const routes =
  <Route component={App}>
    <Route path='/' component={PictureFeedContainer} />
    <Route path='/addPicture' component={NewPictureFormContainer} />
    <Route path='/pictures/:picture' component={PictureContainer} />
  </Route>

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
