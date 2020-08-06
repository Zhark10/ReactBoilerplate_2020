import { StoreConfig } from './store'
import { Actions_Notifications } from 'redux/modules/notifications/Actions'
import { TCurrentNotification } from 'redux/modules/notifications/TReducer'

export const errorHandler = (e: any) => {
  const errorMessageToSave = getErrorMessageByCode(e.response.status)
  const error: TCurrentNotification = {
    type: 'Error',
    message: errorMessageToSave,
  }
  StoreConfig.store.dispatch(Actions_Notifications.store.showNotification(error))
}

const getErrorMessageByCode = (code: string): string => {
  const messages: any = {
    400: 'Something went wrong',
    401: 'Unauthorize request',
    // TODO: other errors
  }

  if (+code in Object.keys(messages)) {
    return messages[code]
  }

  return 'Something went wrong'
}
