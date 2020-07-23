import { createAction } from 'redux-actions'
import { ActionTypes_Notifications } from './TActions'
import { TCurrentNotification } from './TReducer'

const { StoreActions } = ActionTypes_Notifications

export const Actions_Notifications = {
  store: {
    hideNotification: createAction(StoreActions.HIDE_NOTIFICATION),
    showNotification: createAction<TCurrentNotification>(StoreActions.SHOW_NOTIFICATION),
  },
}
