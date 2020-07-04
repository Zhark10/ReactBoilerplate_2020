import { handleActions } from 'redux-actions'
import { IStateUsers, TUsers } from './TReducer'
import { ActionTypes_Users } from './TActions'

const { StoreActions } = ActionTypes_Users

const initialState: IStateUsers = {
  isLoading: false,
  data: null,
}

const ReducerUsers = handleActions<IStateUsers, TUsers>(
  {
    [StoreActions.IS_LOADER_SHOW]: (state) => ({ ...state, isLoading: true }),
    [StoreActions.IS_LOADER_HIDE]: (state) => ({ ...state, isLoading: false }),

    [StoreActions.SAVE_USERS]: (state, action) => ({ ...state, data: action.payload }),
  },
  initialState,
)

export default ReducerUsers
