import { handleActions } from 'redux-actions'
import { IStateNotifications, TCurrentNotification } from './TReducer'
import { ActionTypes_Notifications } from './TActions'

const { StoreActions } = ActionTypes_Notifications

const initialState: IStateNotifications = {
  currentNotification: null,
}

const ReducerErrors = handleActions<IStateNotifications, TCurrentNotification>(
  {
    [StoreActions.HIDE_NOTIFICATION]: () => ({ currentNotification: null }),
    [StoreActions.SHOW_NOTIFICATION]: (_, action) => ({ currentNotification: action.payload }),
  },
  initialState,
)

export default ReducerErrors
