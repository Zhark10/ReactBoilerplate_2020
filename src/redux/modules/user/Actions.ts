import { createAction } from 'redux-actions';
import { IUser } from './Types';

enum Type {
    SAVE_USER = 'SAVE_USER'
}

const saveUser = createAction<IUser>(Type.SAVE_USER);

export const ActionsUser = {
    Type,

    saveUser,
}

export type ActionsUser = Omit<typeof ActionsUser, 'Type'>;
