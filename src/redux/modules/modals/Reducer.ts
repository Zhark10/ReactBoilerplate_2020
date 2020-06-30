import { handleActions } from 'redux-actions';
import { IStateModals, TCurrentModal } from './TReducer';
import { ActionTypes_Modals } from './TActions';

const { StoreActions } = ActionTypes_Modals;

const initialState: IStateModals = {
  currentModal: null,
};

const ReducerModals = handleActions<IStateModals, TCurrentModal>({
  [StoreActions.HIDE_MODAL]: () => ({currentModal: null}),
  [StoreActions.SHOW_MODAL]: (_, action) => ({currentModal: action.payload}),
}, initialState);

export default ReducerModals;
