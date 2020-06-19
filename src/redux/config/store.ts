import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
    onError: (e: any) => {
    console.table(e.response.status);
        // store.dispatch({ type: 'SET_ERROR_STATE' })
    }
});
const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;