import { useSelector } from 'react-redux'
import { TState } from '../../../redux/config/root-types'

export const useNotification = () => {
  const { currentError } = useSelector((state: TState) => state.errors)

  return { currentError }
}
