import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store.js';
import Hw1 from '../src/pages/hw1/Hw1.js';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Hw1 />
  </Provider>,
  document.getElementById('root')
);