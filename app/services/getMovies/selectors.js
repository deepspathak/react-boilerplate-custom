/**
 * getMovies Service Selectors
 */
import { path } from 'ramda';

import {
  NAMESPACE,
} from './constants';

const getStatus = path([NAMESPACE, 'status']);

const getParams = path([NAMESPACE, 'params']);

const getResults = path([NAMESPACE, 'results']);

const getError = path([NAMESPACE, 'error']);

export {
  getStatus,
  getParams,
  getResults,
  getError,
}
