import { handleActions } from 'redux-actions'
import { IStateErrors, TCurrentError } from './TReducer'
import { ActionTypes_Errors } from './TActions'

const { StoreActions } = ActionTypes_Errors

const initialState: IStateErrors = {
  currentError: null,
}

const ReducerErrors = handleActions<IStateErrors, TCurrentError>(
  {
    [StoreActions.RESET_ERROR]: () => ({ currentError: null }),
    [StoreActions.SET_ERROR]: (_, action) => ({ currentError: action.payload }),
  },
  initialState,
)

export default ReducerErrors
