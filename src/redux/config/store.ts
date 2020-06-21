import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import { ActionTypes_Errors } from "../modules/errors/TActions";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  onError: (e: any) => {
    store.dispatch(ActionTypes_Errors.SagaEvents)
    // store.dispatch(Actions_Errors.store.setError(e.response.status))
    // const resetErrorByTime = setTimeout(() => {
    //   store.dispatch(Actions_Errors.store.resetError())
    // }, 2000);
    // clearTimeout(resetErrorByTime);
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