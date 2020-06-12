import { handleActions } from 'redux-actions';
import { ICommon } from './Types';
import { ActionsCommon } from './Actions';

const initialState = null;

const ReducerCommon = handleActions<ICommon | null, ICommon>({
    [ActionsCommon.Type.IS_LOADER_SHOW]: (state, action) => ({...state, [action.payload as string]: true}),
    [ActionsCommon.Type.IS_LOADER_HIDE]: (state, action) => ({...state, [action.payload as string]: false}),
}, initialState);

export default ReducerCommon
