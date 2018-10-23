/*
 *
 * MoviesContainer Reducer
 *
 */

import { UPDATE_NAME, REVERSE_NAME, SHOW_ALERT } from './constants';

export const initialState = {
  name: '',
  showAlert: false,
};

const moviesContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state,
        name: action.name,
      };
    case REVERSE_NAME:
      return {
        ...state,
        name: state.name
          .split('')
          .reverse()
          .join(''),
      };
    case SHOW_ALERT:
      return { ...state,
        showAlert: true,
      };
    default:
      return state;
  }
}

export default moviesContainerReducer;
