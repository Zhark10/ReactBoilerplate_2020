
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './router/Router';
import store from './redux/config/store';

import './index.scss';

const app = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));