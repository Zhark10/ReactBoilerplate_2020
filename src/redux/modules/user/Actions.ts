import { createAction } from 'redux-actions'
import { ActionTypes_User } from './TActions'
import { TUser } from './TReducer'
import { TStoreTemplate } from 'redux/config/root-types'
const { SagaEvents, StoreActions } = ActionTypes_User

export const Actions_User = {
  saga: {},

  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    saveUser: createAction<TStoreTemplate<TUser>>(StoreActions.SAVE_USER),
  },
}
