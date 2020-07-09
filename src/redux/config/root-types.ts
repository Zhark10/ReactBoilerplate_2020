import rootReducer from './root-reducer'

export type TState = ReturnType<typeof rootReducer>

type TResponseInfo = {
  requestId: string
  statusCode: number
  success: boolean
  timestamp: string
}

type TResponseData<T> = {
  data: T
}

export type TStoreTemplate<T> = {
  data: T | null
  responseInfo: TResponseInfo | null
}

export type TResponseModel<T> = TResponseData<T> & TResponseInfo
