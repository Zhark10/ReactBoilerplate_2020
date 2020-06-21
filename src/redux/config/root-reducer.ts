import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Reducers from '../modules/exports'

const rootReducer = combineReducers({
    ...Reducers,
    router: routerReducer,
});

export default rootReducer;