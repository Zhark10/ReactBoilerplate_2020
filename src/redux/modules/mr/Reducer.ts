import { handleActions } from 'redux-actions';
import { ActionsMr } from '../actions';

const initialState = null;

export const ReducerMr = handleActions<IMr | null, IMr>({
    [ActionsMr.Type.SAVE_MR]: (state, action) => action.payload,
}, initialState);
