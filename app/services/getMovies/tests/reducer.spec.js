/**
 *
 * Test getMovies Service Reducer
 *
 */

import reducer from '../reducer';
import { NOT_ASKED, LOADING, SUCCESS, FAILURE } from '../constants';

describe('getMovies Service Reducer', () => {
  describe('NOT_ASKED', () => {
    it('should set the status to NOT_ASKED', () => {
      const action = { type: NOT_ASKED };
      const expectedResult = { status: NOT_ASKED };
      expect(reducer({}, action)).toEqual(expectedResult);
    });

    it('should clear the state of other properties', () => {
      const action = { type: NOT_ASKED };
      const expectedResult = { status: NOT_ASKED };
      expect(reducer({ params: {}, results: {} }, action)).toEqual(
        expectedResult
      );
    });
  });

  describe('LOADING', () => {
    it('should set the status to LOADING and params to action.params', () => {
      const action = { type: LOADING, params: {} };
      const expectedResult = { status: LOADING, params: {} };
      expect(reducer({}, action)).toEqual(expectedResult);
    });

    it('should clear the state of other properties', () => {
      const action = { type: LOADING, params: {} };
      const expectedResult = { status: LOADING, params: {} };
      const state = { type: SUCCESS, params: {}, results: {} };
      expect(reducer(state, action)).toEqual(expectedResult);
    });
  });

  describe('SUCCESS', () => {
    it('should set the status to SUCCESS and results to action.results', () => {
      const action = { type: SUCCESS, results: {} };
      const expectedResult = { status: SUCCESS, results: {} };
      expect(reducer({}, action)).toEqual(expectedResult);
    });

    it('carry over existing state', () => {
      const action = { type: SUCCESS, results: {} };
      const state = { status: LOADING, params: {} };
      const expectedResult = { status: SUCCESS, params: {}, results: {} };
      expect(reducer(state, action)).toEqual(expectedResult);
    });
  });

  describe('FAILURE', () => {
    it('should set the status to FAILURE and results to action.results', () => {
      const action = { type: FAILURE, error: {} };
      const expectedResult = { status: FAILURE, error: {} };
      expect(reducer({}, action)).toEqual(expectedResult);
    });

    it('carry over existing state', () => {
      const action = { type: FAILURE, error: {} };
      const state = { status: LOADING, params: {} };
      const expectedResult = { status: FAILURE, params: {}, error: {} };
      expect(reducer(state, action)).toEqual(expectedResult);
    });
  });
});
