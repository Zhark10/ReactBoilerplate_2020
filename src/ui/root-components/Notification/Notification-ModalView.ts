import { useSelector, useDispatch } from 'react-redux'
import { TState } from '../../../redux/config/root-types'
import { useCallback } from 'react'
import { Actions_Notifications } from 'redux/modules/notifications/Actions'

export const useNotification = () => {
  const { currentNotification } = useSelector((state: TState) => state.notifications)
  const dispatch = useDispatch()

  const onClose = useCallback(() => {
    dispatch(Actions_Notifications.store.hideNotification())
  }, [dispatch])

  return { currentNotification, onClose }
}
