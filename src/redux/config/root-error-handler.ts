import { StoreConfig } from './store'
import { Actions_Errors } from '../modules/errors/Actions'

export const errorHandler = (e: any) => {
  StoreConfig.store.dispatch(Actions_Errors.store.setError(e.response.status))

  const timeToResetError = 2000

  const resetErrorByTime = setTimeout(() => {
    StoreConfig.store.dispatch(Actions_Errors.store.resetError())
  }, timeToResetError)

  return () => clearTimeout(resetErrorByTime)
}
