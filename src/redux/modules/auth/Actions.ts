import { createAction } from 'redux-actions';
import { IAuth } from './Types';

enum Type {
    SAVE_AUTH = 'SAVE_AUTH'
}

const saveAuth = createAction<IAuth>(Type.SAVE_AUTH);

export const ActionsAuth = {
    Type,

    saveAuth,
}

export type ActionsAuth = Omit<typeof ActionsAuth, 'Type'>;
