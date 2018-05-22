type flightsData = array(Types.flightInfo);

[@bs.deriving jsConverter]
type state = {
  loading: bool,
  flights: flightsData,
  error: option(Js.Exn.t),
  ticks: int,
  data: Types.async(flightsData),
};

let initialState = {
  loading: false,
  flights: [||],
  error: None,
  ticks: 0,
  data: Types.Idle,
};

/* let defaultaa = (state, action) => {
     let optionState = Js.Nullable.toOption(state);
     switch (optionState) {
     | None => initialState
     | Some(state) =>
       switch (action##_type) {
       | "REQUEST_FLIGHTS" => {...state, loading: true}
       | "RECEIVE_FLIGHTS" => {
           ...state,
           flights: Array.map(Types.flightInfoFromJs, action##payload##flights),
           loading: false,
         }
       | "FAILURE_FLIGHTS" => {...state, error: action##payload##error}
       | "TICK" => {...state, ticks: state.ticks + 1}
       | _ => state
       }
     };
   }; */
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