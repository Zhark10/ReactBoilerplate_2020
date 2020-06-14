import { createAction } from 'redux-actions';
import { IPost } from './TReducer';
import { ActionTypesPosts } from './TActions';
const { SagaEvents, StoreActions } = ActionTypesPosts;

const fetchPosts = createAction(SagaEvents.FETCH_POSTS);

const showLoader = createAction(StoreActions.IS_LOADER_SHOW);
const hideLoader = createAction(StoreActions.IS_LOADER_HIDE);
const savePosts = createAction<IPost[]>(StoreActions.SAVE_POSTS);

export const ActionsPosts = {
    fetchPosts,
    
    showLoader,
    hideLoader,
    savePosts,
}

export type ActionsPosts = Omit<typeof ActionsPosts, 'Type'>;
