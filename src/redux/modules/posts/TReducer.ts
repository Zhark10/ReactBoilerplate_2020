import { TStoreTemplate } from '../../config/root-types'

export interface IStatePosts extends TStoreTemplate<TPosts> {
  isLoading: boolean
}

export type TPosts = any
