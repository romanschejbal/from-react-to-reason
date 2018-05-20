type flightsData = array(Actions.flightInfo);

[@bs.deriving jsConverter]
type state = {
  loading: bool,
  flights: flightsData,
  error: option(Js.Exn.t),
  ticks: int,
  data: Actions.async(flightsData),
};

let initialState = {
  loading: false,
  flights: [||],
  error: None,
  ticks: 0,
  data: Actions.Idle,
};

let default = (state, action) => {
  let optionState = Js.Nullable.toOption(state);
  switch (optionState) {
  | None => initialState
  | Some(state) =>
    Actions.(
      switch (action) {
      | RequestFlights(_, _, _) => {...state, loading: true}
      | ReceiveFlights(flights) => {...state, flights}
      | FailureFlights(error) => {...state, error: Some(error)}
      | Tick () => {...state, ticks: state.ticks + 1}
      | Flights(data) => {...state, data}
      }
    )
  };
};