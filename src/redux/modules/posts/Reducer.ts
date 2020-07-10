import { handleActions } from 'redux-actions'
import { IStatePosts, TPosts } from './TReducer'
import { ActionTypes_Posts } from './TActions'
import { TStoreTemplate } from 'redux/config/root-types'

const { StoreActions } = ActionTypes_Posts

const initialState: IStatePosts = {
  isLoading: false,
  data: null,
  responseInfo: null,
}

const ReducerPosts = handleActions<IStatePosts, TStoreTemplate<TPosts>>(
  {
    [StoreActions.IS_LOADER_SHOW]: (state) => ({ ...state, isLoading: true }),
    [StoreActions.IS_LOADER_HIDE]: (state) => ({ ...state, isLoading: false }),

    [StoreActions.SAVE_POSTS]: (state, action) => ({ ...state, ...action.payload }),
  },
  initialState,
)

export default ReducerPosts
