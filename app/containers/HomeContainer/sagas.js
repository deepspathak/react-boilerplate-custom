/**
 *
 * HomeContainer Sagas
 *
 */

import { take, put } from 'redux-saga/effects';
import { REVERSE_NAME } from './constants';
import { showAlert } from './actions';

function* reverseNameFlow() {
  /* eslint-disable no-constant-condition */
  while (true) {
    yield take(REVERSE_NAME);
    yield put(showAlert());
  }
}

export default reverseNameFlow;
