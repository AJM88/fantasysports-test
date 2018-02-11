import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import LineUpField from '../lineUpField'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  const context = {
    store,
  };

  shallow(<LineUpField />, { context });
});
