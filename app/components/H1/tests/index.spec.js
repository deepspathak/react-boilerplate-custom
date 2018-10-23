import React from 'react';
import { shallow } from 'enzyme';

import H1 from '../index';

describe('<H1 />', () => {
  it('should exist', () => {
    expect(shallow(<H1 />).exists()).toBe(true);
  });
});
