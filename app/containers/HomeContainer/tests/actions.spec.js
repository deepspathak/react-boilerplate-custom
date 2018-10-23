/**
 *
 * Test HomeContainer Actions
 *
 */

import { UPDATE_NAME, REVERSE_NAME, SHOW_ALERT } from '../constants';
import { updateName, reverseName, showAlert } from '../actions';

describe('HomeContainer Actions', () => {
  describe('updateName', () => {
    it('should return the type and name', () => {
      const name = 'foo';
      const expected = {
        type: UPDATE_NAME,
        name,
      };
      expect(updateName(name)).toEqual(expected);
    });
  });

  describe('reverseName', () => {
    it('should return the type', () => {
      const expected = {
        type: REVERSE_NAME,
      };
      expect(reverseName()).toEqual(expected);
    });
  });

  describe('showAlert', () => {
    it('should return the type', () => {
      const expected = {
        type: SHOW_ALERT,
      };
      expect(showAlert()).toEqual(expected);
    });
  });
});
