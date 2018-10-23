/* eslint-disable redux-saga/yield-effects */
/**
 *
 * Test HomeContainer Sagas
 *
 */

import { take, put } from 'redux-saga/effects';
import { REVERSE_NAME } from '../constants';
import { showAlert } from '../actions';
import reverseNameFlow from '../sagas';

describe('HomeContainer Sagas', () => {
  describe('reverseNameFlow', () => {
    const gen = reverseNameFlow();

    it('should watch for REVERSE_NAME', () => {
      expect(gen.next().value).toEqual(take(REVERSE_NAME));
    });

    it('should dispatch showAlert', () => {
      expect(gen.next().value).toEqual(put(showAlert()));
    });

    it('should watch for the next REVERSE_NAME', () => {
      expect(gen.next().value).toEqual(take(REVERSE_NAME));
    });
  });
});
