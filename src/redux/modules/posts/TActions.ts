enum StoreActions {
  IS_LOADER_SHOW = 'POSTS/IS_LOADER_SHOW',
  IS_LOADER_HIDE = 'POSTS/IS_LOADER_HIDE',
  SAVE_POSTS = 'POSTS/SAVE_POSTS',
}

enum SagaEvents {
  FETCH_POSTS = 'POSTS/FETCH_POSTS',
}

export const ActionTypes_Posts = {
  SagaEvents,
  StoreActions,
}
