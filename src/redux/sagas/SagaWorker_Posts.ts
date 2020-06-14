import {takeEvery, put,call}  from 'redux-saga/effects'
import { ActionsPosts } from '../modules/posts/Actions';
import axios from 'axios';

function* SAGA_WorkerOfPosts() {
    try {
        yield put(ActionsPosts.showLoader())
        const payload = yield call(getPosts)
        yield put(ActionsPosts.savePosts(payload))
        yield put(ActionsPosts.hideLoader())
    } catch(e) {
        alert('Oops... Something went wrong!')
    }
}

const getPosts = async () => (axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts?_limit=5"
}))

export default SAGA_WorkerOfPosts;
