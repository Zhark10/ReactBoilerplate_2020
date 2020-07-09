import { TResponseModel, TStoreTemplate } from 'redux/config/root-types'

export const DataConverter = () => {
  function convertToStoreModel<T>(serverData: TResponseModel<T>): TStoreTemplate<T> {
    const { data, ...responseInfo } = serverData
    return { data, responseInfo: { ...responseInfo } }
  }

  return {
    convertToStoreModel,
  }
}
