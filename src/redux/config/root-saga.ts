import { all, takeEvery } from 'redux-saga/effects';
import { SagaWorker_Posts } from '../sagas/exports';
import { ActionTypesPosts } from '../modules/posts/TActions';

export default function* rootSaga() {
    yield all([
        takeEvery(ActionTypesPosts.SagaEvents.FETCH_POSTS, SagaWorker_Posts)
    ]);
}