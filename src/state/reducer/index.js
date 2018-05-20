// @flow
import {
  type actionT,
  REQUEST_FLIGHTS,
  RECEIVE_FLIGHTS,
  FAILURE_FLIGHTS,
  TICK
} from '../action';

type stateT = {
  +loading: boolean,
  +flights: Array<Object>,
  +error: ?Error,
  +ticks: number
};

const initialState = {
  loading: false,
  flights: [],
  error: null,
  ticks: 0
};

export default (state: stateT = initialState, action: actionT) => {
  switch (action.type) {
    case REQUEST_FLIGHTS:
      return { ...state, loading: true };
    case RECEIVE_FLIGHTS:
      return { ...state, loading: false, flights: action.payload.flights };
    case FAILURE_FLIGHTS:
      return { ...state, error: action.payload.error };
    case TICK:
      return { ...state, ticks: state.ticks + 1 };
    default:
      (action: empty);
  }
  return state;
};
