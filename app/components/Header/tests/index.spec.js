import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should exist', () => {
    expect(shallow(<Header />).exists()).toBe(true);
  });
});
