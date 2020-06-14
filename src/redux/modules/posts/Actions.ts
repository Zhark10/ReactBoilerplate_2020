import { createAction } from 'redux-actions';
import { IPost } from './TReducer';
import { ActionTypes_Posts } from './TActions';
const { SagaEvents, StoreActions } = ActionTypes_Posts;

export const Actions_Posts = {
  saga: {
    fetchPosts: createAction(SagaEvents.FETCH_POSTS),
  },
  
  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    savePosts: createAction<IPost[]>(StoreActions.SAVE_POSTS),
  }
}