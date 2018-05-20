// @flow
export const REQUEST_FLIGHTS = 'REQUEST_FLIGHTS';
export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';
export const FAILURE_FLIGHTS = 'FAILURE_FLIGHTS';
export const TICK = 'TICK';

type ExtractReturnValue<T, F: (...args: Array<any>) => T> = T;
type ERV<T> = ExtractReturnValue<*, T>;

export type actionT =
  | ERV<typeof requestFlights>
  | ERV<typeof receiveFlights>
  | ERV<typeof failureFlights>
  | ERV<typeof tick>;

export const tick = () => ({ type: TICK });

export const fetchFlights = (where: string, when: string) => (
  dispatch: Function
) => {
  dispatch(requestFlights());
  setTimeout(
    () =>
      dispatch(
        receiveFlights([
          { airline: 'British Airways', price: 390, duration: 3.5 },
          { airline: 'KLM', price: 340, duration: 2.2 }
        ])
      ),
    3000
  );
};

const requestFlights = () => ({
  type: REQUEST_FLIGHTS
});

const receiveFlights = (flights: Array<Object>) => ({
  type: RECEIVE_FLIGHTS,
  payload: { flights }
});

const failureFlights = (error: Error) => ({
  type: FAILURE_FLIGHTS,
  payload: { error }
});
