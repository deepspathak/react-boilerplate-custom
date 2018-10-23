/**
 *
 * Test HomeContainer
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer } from '../index';

describe('HomeContainer Container', () => {
  it('should exist', () => {
    expect(shallow(<HomeContainer />).exists()).toBe(true);
  });

  it('should not show the alert if showAlert is false', () => {
    expect(shallow(<HomeContainer showAlert={false} />).find('div > div').length).toBe(1);
  });

  it('should show the alert if showAlert is true', () => {
    expect(shallow(<HomeContainer showAlert />).find('div > div').length).toBe(2);
  });

});
