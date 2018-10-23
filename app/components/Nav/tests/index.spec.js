/**
 *
 * Test Nav
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../index';

describe('<Nav />', () => {
  it('should exist', () => {
    expect(shallow(<Nav />).exists()).toBe(true);
  });
});
