import { handleActions } from 'redux-actions';
import { ICommon } from './Types';
import { ActionsCommon } from './Actions';

const initialState = null;

const ReducerCommon = handleActions<ICommon | null, ICommon>({
    [ActionsCommon.Type.SAVE_COMMON]: (state, action) => action.payload,
}, initialState);

export default ReducerCommon
