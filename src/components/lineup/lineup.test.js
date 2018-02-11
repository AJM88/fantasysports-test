import React from 'react';
import { shallow } from 'enzyme';
import Lineup from '../lineup'

it('renders without crashing', () => {
  shallow(<Lineup formation='442'/>);
});
