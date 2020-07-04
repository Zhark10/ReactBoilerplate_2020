import React, { FC } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

import './ModalPortal.scss'
import { useModalPortal } from './ModalPortal-ViewModel'
import { Modals } from '../../modals/exports'

export const ModalPortal: FC = () => {
  const viewModel = useModalPortal()
  const { closeModal, isOpen, modalToShow } = viewModel
  const EmptyView: FC = () => <div />
  const DynamicModalContent = modalToShow ? Modals[modalToShow] : EmptyView
  return (
    <Modal
      className="modal-portal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <DynamicModalContent />
    </Modal>
  )
}
