/**
 *
 * Test Form
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

describe('<Form />', () => {
  it('should exist', () => {
    expect(shallow(<Form />).exists()).toBe(true);
  });
});
