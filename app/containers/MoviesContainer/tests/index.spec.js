/**
 *
 * Test MoviesContainer
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { MoviesContainer } from '../index';

describe('MoviesContainer Container', () => {
  it('should exist', () => {
    expect(shallow(<MoviesContainer />).exists()).toBe(true);
  });

  it('should show the alert if showAlert is true', () => {
    const movies = {
      results: [
        {
          id: 1234,
          title: 'foo',
        },
      ],
    };
    expect(
      shallow(<MoviesContainer movies={movies} />).find('div > ul').length
    ).toBe(1);
  });
});
