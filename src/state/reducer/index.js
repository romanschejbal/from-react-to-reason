// @flow
import {
  type actionT,
  REQUEST_FLIGHTS,
  RECEIVE_FLIGHTS,
  FAILURE_FLIGHTS
} from '../action';

type stateT = {
  +loading: boolean,
  +flights: Array<Object>,
  +error: ?Error
};

const initialState = {
  loading: false,
  flights: [],
  error: null
};

export default (state: stateT = initialState, action: actionT) => {
  switch (action.type) {
    case REQUEST_FLIGHTS:
      return { ...state, loading: true };
    case RECEIVE_FLIGHTS:
      return { ...state, loading: false, flights: action.payload.flights };
    case FAILURE_FLIGHTS:
      return { ...state, error: action.payload.error };
    default:
      (action: empty);
  }
  return state;
};
