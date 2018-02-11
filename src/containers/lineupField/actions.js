import axios from 'axios'

import {
  INITIAL_LINEUP_FETCHING,
  INITIAL_LINEUP_RECEIVED,
  INITIAL_LINEUP_FAILED
 } from '../../actionTypes.js'

export function getLineupSuccess(data) {
  return {
    type: INITIAL_LINEUP_RECEIVED,
    payload: data
  };
}

export function getLineupFailed(error) {
  return {
    type: INITIAL_LINEUP_FAILED,
    error: error
  };
}

export function getLineup() {
  return (dispatch) => {
    dispatch({ type: INITIAL_LINEUP_FETCHING });
    axios
      .get('http://lineups.dev.fantech.io/')
      .then(response => {
        dispatch(getLineupSuccess(response.data));
      })
      .catch(error => {
        dispatch(getLineupFailed(error));
      });
  };
}
