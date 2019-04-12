import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './components/QuoteBox';
import handleActions from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(handleActions, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <QuoteBox />
  </Provider>,
  document.getElementById('root')
);