import { handleActions } from 'redux-actions';
import { IAuth } from './Types';
import { ActionsAuth } from './Actions';

const initialState = null;

const ReducerAuth = handleActions<IAuth | null, IAuth>({
    [ActionsAuth.Type.SAVE_AUTH]: (state, action) => action.payload,
}, initialState);

export default ReducerAuth
