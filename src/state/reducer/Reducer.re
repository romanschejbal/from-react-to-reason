type flightsData = array(Types.flightInfo);

[@bs.deriving jsConverter]
type state = {
  ticks: int,
  data: Types.async(flightsData),
};

let initialState = {ticks: 0, data: Types.Idle};

let default = (state, action) => {
  let optionState = Js.Nullable.toOption(state);
  switch (optionState) {
  | None => initialState
  | Some(state) =>
    Actions.(
      switch (action) {
      | Tick () => {...state, ticks: state.ticks + 1}
      | Flights(data) => {...state, data}
      }
    )
  };
};