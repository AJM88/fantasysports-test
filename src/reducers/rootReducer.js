import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lineupReducer from './lineupReducer'

export default combineReducers({
  routing: routerReducer,
  lineup: lineupReducer
})
