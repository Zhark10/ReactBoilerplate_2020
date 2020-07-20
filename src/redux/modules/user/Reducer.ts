import { handleActions } from 'redux-actions'
import { IStateUser, TUser } from './TReducer'
import { ActionTypes_User } from './TActions'
import { TStoreTemplate } from 'redux/config/root-types'

const { StoreActions } = ActionTypes_User

const initialState: IStateUser = {
  isLoading: false,
  data: null,
  responseInfo: null,
}

const ReducerUser = handleActions<IStateUser, TStoreTemplate<TUser>>(
  {
    [StoreActions.IS_LOADER_SHOW]: (state) => ({ ...state, isLoading: true }),
    [StoreActions.IS_LOADER_HIDE]: (state) => ({ ...state, isLoading: false }),

    [StoreActions.SAVE_USER]: (state, action) => ({ ...state, ...action.payload }),
  },
  initialState,
)

export default ReducerUser
