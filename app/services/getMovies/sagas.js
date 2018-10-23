/**
 * getMovies Service Sagas
 */

import { take, call, put } from 'redux-saga/effects';

import request from '../../utils/request';
import { URL, MAKE_REQUEST } from './constants';
import { notAsked, loading, success, failure } from './actions';

function* requestFlow(params) {
  // set status as loading and set params
  yield put(loading(params));

  try {
    const results = yield call(request, URL, params);

    // Set the status to SUCCESS and store the results
    yield put(success(results));
  } catch (err) {
    // Set the status to FAILURE and store the error
    yield put(failure(err));
  }
}

function* getMoviesServiceFlow() {
  yield put(notAsked());
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // watch for MAKE_REQUEST to be dispatched
    const {
      params,
    } = yield take(MAKE_REQUEST);
    yield call(requestFlow, params);
  }
}

export {
  requestFlow,
};

export default getMoviesServiceFlow;
