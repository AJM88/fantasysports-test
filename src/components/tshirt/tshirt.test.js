import React from 'react';
import { shallow } from 'enzyme';
import Tshirt from '../tshirt'

it('renders without crashing', () => {
  shallow(<Tshirt number={5} name='Test name'/>);
});
