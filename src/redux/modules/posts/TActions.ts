enum StoreActions {
    IS_LOADER_SHOW = 'IS_LOADER_SHOW',
    IS_LOADER_HIDE = 'IS_LOADER_HIDE',
    SAVE_POSTS = 'SAVE_POSTS',
}

enum SagaEvents {
    FETCH_POSTS = 'FETCH_POSTS'
}

export const ActionTypes_Posts = {
    SagaEvents,
    StoreActions,
}