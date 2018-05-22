type from = string;

type where = string;

type whenT = string;

[@bs.deriving accessors]
type action =
  | Tick(unit)
  | Flights(Types.async(array(Types.flightInfo)));

let requestFlights = (_from, _where, _whenT) =>
  (. dispatch) => {
    dispatch(Flights(Loading));
    Js.Global.setTimeout(
      () =>
        dispatch(
          Flights(
            Success([|
              {airline: "British Airways", price: 390, duration: 3.5},
              {airline: "KLM", price: 340, duration: 2.2},
            |]),
          ),
        ),
      2000,
    );
  };