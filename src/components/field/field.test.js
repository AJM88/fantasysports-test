import React from 'react';
import { shallow } from 'enzyme';
import Field from '../field'

it('renders without crashing', () => {
  shallow(<Field />);
});
