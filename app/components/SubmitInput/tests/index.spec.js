/**
 *
 * Test SubmitInput
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import SubmitInput from '../index';

describe('<SubmitInput />', () => {
  it('should exist', () => {
    expect(shallow(<SubmitInput />).exists()).toBe(true);
  });
});
