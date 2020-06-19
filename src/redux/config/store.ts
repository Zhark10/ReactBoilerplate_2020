import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import { Actions_Errors } from "../modules/errors/Actions";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  onError: (e: any) => {
    store.dispatch(Actions_Errors.store.setError(e.response.status))
  }
});

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export const storeConfig = { 
  store, history 
};