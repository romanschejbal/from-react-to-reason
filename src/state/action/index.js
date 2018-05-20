// @flow
export const REQUEST_FLIGHTS = 'REQUEST_FLIGHTS';
export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';
export const FAILURE_FLIGHTS = 'FAILURE_FLIGHTS';

type ExtractReturnValue<T, F: (...args: Array<any>) => T> = T;
type ERV<T> = ExtractReturnValue<*, T>;

export type actionT =
  | ERV<typeof requestFlights>
  | ERV<typeof receiveFlights>
  | ERV<typeof failureFlights>;

export const requestFlights = (where: string, when: string) => ({
  type: REQUEST_FLIGHTS,
  payload: { where, when }
});

export const receiveFlights = (flights: Array<Object>) => ({
  type: RECEIVE_FLIGHTS,
  payload: { flights }
});

export const failureFlights = (error: Error) => ({
  type: FAILURE_FLIGHTS,
  payload: { error }
});
