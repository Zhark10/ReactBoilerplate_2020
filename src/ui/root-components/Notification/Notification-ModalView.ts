import { useSelector } from 'react-redux'
import { TState } from '../../../redux/config/root-types'

export const useNotification = () => {
  const { currentNotification } = useSelector((state: TState) => state.notifications)

  return { currentNotification }
}
