import { createAction } from 'redux-actions';
import { ICommon } from './Types';

enum Type {
    IS_LOADER_SHOW = 'IS_LOADER_SHOW',
    IS_LOADER_HIDE = 'IS_LOADER_HIDE',
}

const showLoader = createAction<ICommon>(Type.IS_LOADER_SHOW);
const hideLoader = createAction<ICommon>(Type.IS_LOADER_HIDE);

export const ActionsCommon = {
    Type,

    showLoader,
    hideLoader,
}

export type ActionsCommon = Omit<typeof ActionsCommon, 'Type'>;
