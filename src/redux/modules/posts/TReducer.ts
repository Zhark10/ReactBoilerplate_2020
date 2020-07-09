import { TStoreTemplate } from '../../config/root-types'

export interface IStatePosts {
  isLoading: boolean
  data: TStoreTemplate<TPosts> | null
}

export type TPosts = any
