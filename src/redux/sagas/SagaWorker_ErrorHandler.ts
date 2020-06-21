import { put, delay }  from 'redux-saga/effects'
import { Actions_Errors } from '../modules/errors/Actions';

function* SagaWorker_ErrorHandler() {
  yield put(Actions_Errors.store.setError())
  yield delay(2000);
  yield put(Actions_Errors.store.resetError())
}

export default SagaWorker_ErrorHandler;
