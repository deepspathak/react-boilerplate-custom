/**
 *
 * MoviesContainer Sagas
 *
 */

import { take, put } from 'redux-saga/effects';
import { REVERSE_NAME } from './constants';
import { showAlert } from './actions';

function* reverseNameFlow() {
  /* eslint-disable no-constant-condition */
  try {
    while (true) {
      yield take(REVERSE_NAME);
      yield put(showAlert());
    }
  } catch (err) {
    console.log('requestNameFlowError: ', err); // eslint-disable-line no-console
  }
}

export default reverseNameFlow;
