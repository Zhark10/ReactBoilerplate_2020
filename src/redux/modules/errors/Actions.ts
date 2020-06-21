import { createAction } from 'redux-actions';
import { ActionTypes_Errors } from './TActions';
import { TCurrentError } from './TReducer';
const { StoreActions } = ActionTypes_Errors;

export const Actions_Errors = {
  saga: { },
  
  store: {
    resetError: createAction(StoreActions.RESET_ERROR),
    setError: createAction<TCurrentError>(StoreActions.SET_ERROR),
  }
};
