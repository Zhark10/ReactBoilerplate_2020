import { handleActions } from 'redux-actions';
import { IStatePosts, IPost } from './Types';
import { ActionsPosts } from './Actions';

const initialState: IStatePosts = {
    isLoading: false,
    data: null,
};

const ReducerPosts = handleActions<IStatePosts, IPost[]>({
    [ActionsPosts.Type.IS_LOADER_SHOW]: (state) => ({...state, isLoading: true}),
    [ActionsPosts.Type.IS_LOADER_HIDE]: (state) => ({...state, isLoading: false}),
    
    [ActionsPosts.Type.SAVE_POSTS]: (state, action) => ({...state, data: action.payload}),
}, initialState);

export default ReducerPosts
