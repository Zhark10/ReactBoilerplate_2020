import { createAction } from 'redux-actions';
import { IMr } from '../../types';

enum Type {
    SAVE_MR = 'SAVE_MR'
}

const saveMr = createAction<IMr>(Type.SAVE_MR);

export const ActionsMr = {
    Type,

    saveMr,
}

export type ActionsMr = Omit<typeof ActionsMr, 'Type'>;
