import { all } from 'redux-saga/effects';
import * as Sagas from '../sagas/exports'

export default function* rootSaga() {
    yield all(Sagas);
}