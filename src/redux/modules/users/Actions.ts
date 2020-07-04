import { createAction } from 'redux-actions'
import { ActionTypes_Users } from './TActions'
import { TUsers } from './TReducer'
const { StoreActions } = ActionTypes_Users

export const Actions_Users = {
  saga: {},

  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    saveUsers: createAction<TUsers>(StoreActions.SAVE_USERS),
  },
}
