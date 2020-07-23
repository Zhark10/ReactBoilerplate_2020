import { TStoreTemplate } from '../../config/root-types'

export interface IStateNotifications extends TStoreTemplate<TNotifications> {
  isLoading: boolean
}

export type TNotifications = any
