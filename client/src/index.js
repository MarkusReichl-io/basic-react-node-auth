import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import { AUTH_USER } from './actions/types';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

if (localStorage.getItem('token')) store.dispatch({ type: AUTH_USER });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
