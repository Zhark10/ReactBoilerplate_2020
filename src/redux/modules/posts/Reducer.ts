import { handleActions } from 'redux-actions';
import { IStatePosts, IPost } from './TReducer';
import { ActionTypes_Posts } from './TActions';

const { StoreActions } = ActionTypes_Posts;


const initialState: IStatePosts = {
    isLoading: false,
    data: null,
};

const ReducerPosts = handleActions<IStatePosts, IPost[]>({
    [StoreActions.IS_LOADER_SHOW]: (state) => ({...state, isLoading: true}),
    [StoreActions.IS_LOADER_HIDE]: (state) => ({...state, isLoading: false}),
    
    [StoreActions.SAVE_POSTS]: (state, action) => ({...state, data: action.payload}),
}, initialState);

export default ReducerPosts
