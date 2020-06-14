import { all, takeEvery } from 'redux-saga/effects';
import { SagaWorker_Posts } from '../sagas/exports';
import { ActionTypes_Posts } from '../modules/posts/TActions';

export default function* rootSaga() {
    yield all([
        takeEvery(ActionTypes_Posts.SagaEvents.FETCH_POSTS, SagaWorker_Posts)
    ]);
}