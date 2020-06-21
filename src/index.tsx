
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './router/Router';
import {StoreConfig} from './redux/config/store';

import './index.scss';

const app = (
  <Provider store={StoreConfig.store}>
    <MainRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));