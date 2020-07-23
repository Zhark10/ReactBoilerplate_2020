import { handleActions } from 'redux-actions'
import { IStateNotifications, TNotifications } from './TReducer'
import { ActionTypes_Notifications } from './TActions'
import { TStoreTemplate } from 'redux/config/root-types'

const { StoreActions } = ActionTypes_Notifications

const initialState: IStateNotifications = {
  isLoading: false,
  data: null,
  responseInfo: null,
}

const ReducerNotifications = handleActions<IStateNotifications, TStoreTemplate<TNotifications>>(
  {
    [StoreActions.IS_LOADER_SHOW]: (state) => ({ ...state, isLoading: true }),
    [StoreActions.IS_LOADER_HIDE]: (state) => ({ ...state, isLoading: false }),

    [StoreActions.SAVE_NOTIFICATIONS]: (state, action) => ({ ...state, ...action.payload }),
  },
  initialState,
)

export default ReducerNotifications
