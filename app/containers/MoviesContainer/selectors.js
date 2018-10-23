/**
 *
 * MoviesContainer Selectors
 *
 */
import { path } from 'ramda';
import { createSelector } from 'reselect';
import { NAMESPACE } from './constants';
import { getResults } from '../../services/getMovies/selectors';

export const getName = path([NAMESPACE, 'name']);

export const getShowAlert = path([NAMESPACE, 'showAlert']);

export const getShowReversedAlert = createSelector(
  getName,
  getShowAlert,
  (name, showAlert) => (name && name.length > 2 ? showAlert : false)
);

// TODO: import getResults from services and create selector to use results in container
/**
 * export const getAppTitle = createSelector(
 *  getResults, // import from services
 *  path('title'),
 * );
 */

export const getMovies = createSelector(getResults, (movies) => movies);
