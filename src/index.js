import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-pagination/assets/index.css';

import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import RootRouter from './rootRouter';
import * as serviceWorker from './serviceWorker';

const initialState = window.initialReduxState;
const history = createHashHistory();
const store = configureStore(history, initialState);

const app = (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
