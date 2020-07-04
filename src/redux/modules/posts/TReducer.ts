export interface IStatePosts {
  isLoading: boolean
  data: IPost[] | null
}

export type TPosts = IPost[]

export interface IPost {
  readonly userId: number
  readonly id: number
  readonly title: string
  readonly body: string
}
