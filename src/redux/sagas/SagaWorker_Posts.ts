import { put, call } from 'redux-saga/effects'
import { Actions_Posts } from '../modules/posts/Actions'
import { RequestMethods } from 'utils/axios/methods'
import { TPosts } from 'redux/modules/posts/TReducer'

const { get } = RequestMethods()

function* SagaWorker_Posts() {
  yield put(Actions_Posts.store.showLoader())
  const payload = yield call(async () => await get<TPosts>('/posts?_limit=15'))
  yield put(Actions_Posts.store.savePosts(payload.data))
  yield put(Actions_Posts.store.hideLoader())
}

export default SagaWorker_Posts
