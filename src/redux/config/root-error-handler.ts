import { StoreConfig } from './store'
import { Actions_Errors } from '../modules/errors/Actions'

export const errorHandler = (e: any) => {
  const errorMessageToSave = getErrorMessageByCode(e.response.status)
  StoreConfig.store.dispatch(Actions_Errors.store.setError(errorMessageToSave))

  const timeToResetError = 2000

  const resetErrorByTime = setTimeout(() => {
    StoreConfig.store.dispatch(Actions_Errors.store.resetError())
  }, timeToResetError)

  return () => clearTimeout(resetErrorByTime)
}

const getErrorMessageByCode = (code: string): string => {
  const messages: any = {
    400: 'Something went wrong',
    // TODO: other errors
  }

  if (+code in Object.keys(messages)) {
    return messages[code]
  }

  return 'Something went wrong'
}
