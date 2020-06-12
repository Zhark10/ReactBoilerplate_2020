import { createAction } from 'redux-actions';
import { IPosts } from './Types';

enum Type {
    SAVE_POSTS = 'SAVE_POSTS'
}

const savePosts = createAction<IPosts>(Type.SAVE_POSTS);

export const ActionsPosts = {
    Type,

    savePosts,
}

export type ActionsPosts = Omit<typeof ActionsPosts, 'Type'>;
