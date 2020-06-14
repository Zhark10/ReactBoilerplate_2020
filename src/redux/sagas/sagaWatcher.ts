import {takeEvery, put,call}  from 'redux-saga/effects'
import { ActionsPosts } from '../modules/posts/Actions';
import axios from 'axios';

function sagaWatcher() {
    return takeEvery(ActionsPosts.Type.FETCH, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(ActionsPosts.showLoader())
        const payload = yield call(getPosts)
        yield put(ActionsPosts.savePosts(payload))
        yield put(ActionsPosts.hideLoader())
    } catch(e) {
        alert('Oops... Something went wrong!')
    }
}

const getPosts = async () => (
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts?_limit=5"
  })
)


    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    // return await response.json()

export default sagaWatcher;
