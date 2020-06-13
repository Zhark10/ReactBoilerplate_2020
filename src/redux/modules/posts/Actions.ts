import { createAction } from 'redux-actions';
import { IPost } from './Types';

enum Type {
    IS_LOADER_SHOW = 'IS_LOADER_SHOW',
    IS_LOADER_HIDE = 'IS_LOADER_HIDE',
    SAVE_POSTS = 'SAVE_POSTS',
}

const showLoader = createAction(Type.IS_LOADER_SHOW);
const hideLoader = createAction(Type.IS_LOADER_HIDE);
const savePosts = createAction<IPost[]>(Type.SAVE_POSTS);

export const ActionsPosts = {
    Type,

    showLoader,
    hideLoader,
    savePosts,
}

export type ActionsPosts = Omit<typeof ActionsPosts, 'Type'>;
