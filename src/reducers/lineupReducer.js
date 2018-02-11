import {
  INITIAL_LINEUP_FETCHING,
  INITIAL_LINEUP_RECEIVED,
  INITIAL_LINEUP_FAILED
} from '../actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case INITIAL_LINEUP_FETCHING:
      return {...state, loading: true };
    case INITIAL_LINEUP_RECEIVED:
      return {...state, loading: false, data: action.payload, lastUpdated: new Date() };
    case INITIAL_LINEUP_FAILED:
      return {...state, loading: false, error: action.error };
    default:
      return state;
  }
};
