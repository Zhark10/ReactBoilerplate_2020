import React, { FC } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

import { useNotification } from './Notification-ModalView'

import './Notification.scss'

export const Notification: FC = () => {
  const viewModel = useNotification()
  return (
    <div className="notification">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!viewModel.currentError}
        autoHideDuration={5000}
        message={viewModel.currentError}
      />
    </div>
  )
}
