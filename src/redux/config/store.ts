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
        store.dispatch({ 
            type: ActionTypes_Errors.StoreActions.SET_ERROR, 
            payload: e.response.status 
        })
    }
});

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default { store, history };