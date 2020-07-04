import { put, call } from 'redux-saga/effects'
import { Actions_Posts } from '../modules/posts/Actions'
import axios from 'axios'

function* SagaWorker_Posts() {
  yield put(Actions_Posts.store.showLoader())
  const payload = yield call(getPosts)
  yield put(Actions_Posts.store.savePosts(payload.data))
  yield put(Actions_Posts.store.hideLoader())
}

const getPosts = async () =>
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts?_limit=15',
  })

export default SagaWorker_Posts
