/**
 * getMovies Service Constants
 */

import {
  NAMESPACE as SERVICES_NAMESPACE,
} from '../../constants';

const NAMESPACE = `${SERVICES_NAMESPACE}/getMovies`;

const DOMAIN = 'https://api.themoviedb.org/3';
const API_KEY = 'df1b9abfde892d0d5407d6b602b349f2';
const YEAR = '2017';
const URL = `${DOMAIN}/discover/movie?year=${YEAR}&api_key=${API_KEY}`;

const METHOD = 'get';

// trigger to fetch data in saga
const MAKE_REQUEST = `${NAMESPACE}/MAKE_REQUEST`;

// status of the service
const NOT_ASKED = `${NAMESPACE}/NOT_ASKED`;
const LOADING = `${NAMESPACE}/LOADING`;
const SUCCESS = `${NAMESPACE}/SUCCESS`;
const FAILURE = `${NAMESPACE}/FAILURE`;

export {
  NAMESPACE,
  URL,
  METHOD,
  MAKE_REQUEST,
  NOT_ASKED,
  LOADING,
  SUCCESS,
  FAILURE,
}
