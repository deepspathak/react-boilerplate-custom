/**
 *
 * Test Button
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should exist', () => {
    expect(shallow(<Button />).exists()).toBe(true);
  });
});
