import React from 'react';
import { render, shallow } from 'enzyme';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should exist', () => {
    expect(shallow(<LoadingIndicator />).exists()).toBe(true);
  });

  it('should render 12 divs', () => {
    const renderedComponent = render(<LoadingIndicator />);
    expect(renderedComponent.first().find('div').length).toBe(12);
  });
});
