import { TStoreTemplate } from '../../config/root-types'

export interface IStateUser extends TStoreTemplate<TUser> {
  isLoading: boolean
}

export type TUser = any
