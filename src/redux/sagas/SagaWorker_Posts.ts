import { put, call }  from 'redux-saga/effects'
import { Actions_Posts } from '../modules/posts/Actions';
import axios from 'axios';

function* SagaWorker_Posts() {
  try {
    yield put(Actions_Posts.store.showLoader())
    const payload = yield call(getPosts)
    yield put(Actions_Posts.store.savePosts(payload))
    yield put(Actions_Posts.store.hideLoader())
  } catch(e) {
    alert('Oops... Something went wrong!')
  }
}

const getPosts = async () => (axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts?_limit=5"
}))

export default SagaWorker_Posts;