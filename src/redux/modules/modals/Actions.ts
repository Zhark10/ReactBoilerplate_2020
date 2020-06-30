import { createAction } from 'redux-actions';
import { ActionTypes_Modals } from './TActions';
import { TCurrentModal } from './TReducer';
const { StoreActions } = ActionTypes_Modals;

export const Actions_Modals = {
  saga: { },
  
  store: {
    hideModal: createAction(StoreActions.HIDE_MODAL),
    showModal: createAction<TCurrentModal>(StoreActions.SHOW_MODAL),
  }
};
