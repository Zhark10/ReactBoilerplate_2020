import {takeEvery, put,call}  from 'redux-saga/effects'
import {ActionsAuth}  from '../modules/auth/Actions'

function* sagaWatcher() {
    yield takeEvery(ActionsAuth.Type.SAVE_AUTH, sagaWorker)
}

function* sagaWorker() {
    try {

    } catch(e) {

    }
}

export default sagaWatcher;
