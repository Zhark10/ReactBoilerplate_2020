import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TState } from '../../../redux/config/root-types'
import { Actions_Modals } from '../../../redux/modules/modals/Actions'

export const useExampleModal = () => {
  const {} = useSelector((state: TState) => state)
  const dispatch = useDispatch()

  useEffect(() => {}, [dispatch])

  const closeModal = () => {
    dispatch(Actions_Modals.store.hideModal())
  }

  return { closeModal }
}
