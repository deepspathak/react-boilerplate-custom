/**
 *
 * MoviesContainer Actions
 *
 */

import { UPDATE_NAME, REVERSE_NAME, SHOW_ALERT } from './constants';

export const updateName = (name) => ({
  type: UPDATE_NAME,
  name,
});

export const reverseName = () => ({
  type: REVERSE_NAME,
});

export const showAlert = () => ({
  type: SHOW_ALERT,
});
