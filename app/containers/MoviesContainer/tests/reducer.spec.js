/*
 *
 * Test MoviesContainer Reducer
 *
 */

import moviesContainerReducer, { initialState } from '../reducer';
import { UPDATE_NAME, REVERSE_NAME, SHOW_ALERT } from '../constants';

describe('moviesContainerReducer', () => {
  describe('default', () => {
    it('should return the initial state', () => {
      expect(moviesContainerReducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('UPDATE_NAME', () => {
    it('should update the name', () => {
      const name = 'foo';
      const action = {
        type: UPDATE_NAME,
        name,
      };
      const expected = {
        name,
      };
      expect(moviesContainerReducer({}, action)).toEqual(expected);
    });
  });

  describe('REVERSE_NAME', () => {
    it('should reverse the name', () => {
      const name = 'foo';
      const action = {
        type: REVERSE_NAME,
      };
      const expected = {
        name: 'oof',
      };
      expect(moviesContainerReducer({ name }, action)).toEqual(expected);
    });
  });

  describe('SHOW_ALERT', () => {
    it('should make showAlert true', () => {
      const action = {
        type: SHOW_ALERT,
      };
      const state = {
        showAlert: false,
      };
      const expected = {
        showAlert: true,
      };
      expect(moviesContainerReducer(state, action)).toEqual(expected);
    });
  });
});
