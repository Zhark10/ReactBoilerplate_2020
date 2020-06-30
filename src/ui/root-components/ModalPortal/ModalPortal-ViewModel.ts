import { useSelector, useDispatch } from 'react-redux';
import { TState } from '../../../redux/config/root-types';
import { Actions_Modals } from '../../../redux/modules/modals/Actions';

export const useModalPortal = () => {
  const { currentModal } = useSelector((state: TState) => state.modals);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(Actions_Modals.store.hideModal())
  }

  return { 
    closeModal, 
    isOpen: !!currentModal, 
    modalToShow: currentModal 
  }
}
