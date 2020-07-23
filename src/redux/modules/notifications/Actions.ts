import { createAction } from 'redux-actions'
import { ActionTypes_Notifications } from './TActions'
import { TCurrentNotification } from './TReducer'

const { StoreActions } = ActionTypes_Notifications

export const Actions_Notifications = {
  store: {
    resetNotification: createAction(StoreActions.HIDE_NOTIFICATION),
    setNotification: createAction<TCurrentNotification>(StoreActions.SHOW_NOTIFICATION),
  },
}
