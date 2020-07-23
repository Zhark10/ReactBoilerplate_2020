import { createAction } from 'redux-actions'
import { ActionTypes_Notifications } from './TActions'
import { TNotifications } from './TReducer'
import { TStoreTemplate } from 'redux/config/root-types'
const { SagaEvents, StoreActions } = ActionTypes_Notifications

export const Actions_Notifications = {
  saga: {},

  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    saveNotifications: createAction<TStoreTemplate<TNotifications>>(StoreActions.SAVE_NOTIFICATIONS),
  },
}
