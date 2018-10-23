/**
 *
 * Test TextInput
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../index';

describe('<TextInput />', () => {
  it('should exist', () => {
    expect(shallow(<TextInput />).exists()).toBe(true);
  });
});
