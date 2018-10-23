/**
 *
 * MoviesContainer Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import { NAMESPACE } from './constants';
import reducer from './reducer';
import saga from './sagas';
import { getMovies } from './selectors';

import { makeRequest } from '../../services/getMovies/actions';

import Button from '../../components/Button';

export const MoviesContainer = ({ onHandleClick, movies }) => (
  <div>
    <p>Movies Container</p>
    <p>
      Click the <code>Submit</code> button to show list of movies
    </p>
    <Button onClick={onHandleClick}>Submit</Button>
    {movies ? (
      <ul>
        {movies.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    ) : null}
  </div>
);

MoviesContainer.propTypes = {
  onHandleClick: PropTypes.func,
  movies: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  movies: getMovies,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleClick: () => {
    dispatch(makeRequest());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: NAMESPACE, reducer });
const withSaga = injectSaga({ key: NAMESPACE, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MoviesContainer);
