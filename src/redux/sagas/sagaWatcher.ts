import {takeEvery, put,call}  from 'redux-saga/effects'
import { ActionsPosts } from '../modules/posts/Actions';

function* sagaWatcher() {
    yield takeEvery(ActionsPosts.Type.SAVE_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(ActionsPosts.showLoader())
        const payload = yield call(fetchPosts)
        yield put(ActionsPosts.savePosts(payload))
        yield put(ActionsPosts.hideLoader())
    } catch(e) {
        alert('Oops... Something went wrong!')
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}

export default sagaWatcher;
