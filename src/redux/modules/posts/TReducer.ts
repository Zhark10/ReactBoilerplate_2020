export interface IStatePosts {
  isLoading: boolean,
  data: IPost[] | null,
}

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}
