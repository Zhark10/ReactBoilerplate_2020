import { createAction } from 'redux-actions'
import { ActionTypes_Posts } from './TActions'
import { TPosts } from './TReducer'
import { TStoreTemplate } from 'redux/config/root-types'
const { SagaEvents, StoreActions } = ActionTypes_Posts

export const Actions_Posts = {
  saga: {
    fetchPosts: createAction(SagaEvents.FETCH_POSTS),
  },

  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    savePosts: createAction<TStoreTemplate<TPosts>>(StoreActions.SAVE_POSTS),
  },
}
