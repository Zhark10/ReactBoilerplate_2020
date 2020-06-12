import { handleActions } from 'redux-actions';
import { IPosts } from './Types';
import { ActionsPosts } from './Actions';

const initialState = null;

const ReducerPosts = handleActions<IPosts | null, IPosts>({
    [ActionsPosts.Type.SAVE_POSTS]: (state, action) => action.payload,
}, initialState);

export default ReducerPosts
