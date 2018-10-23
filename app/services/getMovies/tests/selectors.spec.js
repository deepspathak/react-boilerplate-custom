/**
 *
 * Test getMovies Service Selectors
 *
 */

import { NAMESPACE } from '../constants';
import {
  getStatus,
  getParams,
  getResults,
  getError,
} from '../selectors';

describe('getMovies Service Selectors', () => {
  describe('getStatus', () => {
    it('should select the status', () => {
      const status = 'SUCCESS';
      const state = {
        [NAMESPACE]: {
          status,
        },
      };

      expect(getStatus(state)).toBe(status);
    });
  });

  describe('getParams', () => {
    it('should select the params', () => {
      const params = { username: 'mxstbr' };
      const state = {
        [NAMESPACE]: {
          params,
        },
      };

      expect(getParams(state)).toBe(params);
    });
  });

  describe('getResults', () => {
    it('should select the results', () => {
      const results = [{ foo: 'bar' }];
      const state = {
        [NAMESPACE]: {
          results,
        },
      };

      expect(getResults(state)).toBe(results);
    });
  });

  describe('getError', () => {
    it('should select the results', () => {
      const error = new Error('Some error');
      const state = {
        [NAMESPACE]: {
          error,
        },
      };

      expect(getError(state)).toBe(error);
    });
  });
});
