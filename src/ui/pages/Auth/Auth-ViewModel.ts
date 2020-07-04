import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TState } from '../../../redux/config/root-types'
import { Actions_Modals } from '../../../redux/modules/modals/Actions'

export const useAuth = () => {
  const {} = useSelector((state: TState) => state)
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {}, [dispatch])

  const openExampleModal = () => {
    dispatch(Actions_Modals.store.showModal('ExampleModal'))
  }

  return { goBack, openExampleModal }
}
