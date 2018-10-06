import { put, takeLatest } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { changeLocale } from 'containers/LanguageProvider/actions'
import { SHOW_TOAST, INIT_APP } from './constants'

export function* initAppFlow() {
  // toggle language
  yield put(changeLocale('de'))
}

export function* showToastFlow() {
  toast.success("awesome!!");
}

export default function* rootSaga() {  
  yield takeLatest(INIT_APP, initAppFlow);
  yield takeLatest(SHOW_TOAST, showToastFlow);
}
