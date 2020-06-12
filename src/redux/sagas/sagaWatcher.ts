import {takeEvery, put,call}  from 'redux-saga/effects'
import { ActionsPosts } from '../modules/posts/Actions';
import { ActionsCommon } from '../modules/common/Actions';

function* sagaWatcher() {
    yield takeEvery(ActionsPosts.Type.SAVE_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(ActionsCommon.showLoader(''))
    } catch(e) {
        
    }
}

export default sagaWatcher;
