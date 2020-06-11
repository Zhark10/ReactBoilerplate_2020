import { handleActions } from 'redux-actions';
import { IUser } from './Types';
import { ActionsUser } from './Actions';

const initialState = null;

const ReducerUser = handleActions<IUser | null, IUser>({
    [ActionsUser.Type.SAVE_USER]: (state, action) => action.payload,
}, initialState);

export default ReducerUser
