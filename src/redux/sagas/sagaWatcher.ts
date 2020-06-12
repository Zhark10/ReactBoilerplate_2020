import {takeEvery, put,call}  from 'redux-saga/effects'
import { ActionsPosts } from '../modules/posts/Actions';

function* sagaWatcher() {
    yield takeEvery(ActionsPosts.Type.SAVE_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield call()
    } catch(e) {

    }
}

export default sagaWatcher;
