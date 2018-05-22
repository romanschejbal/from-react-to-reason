type from = string;

type where = string;

type whenT = string;

[@bs.deriving accessors]
type action =
  | RequestFlights(from, where, whenT)
  | ReceiveFlights(array(Types.flightInfo))
  | FailureFlights(Js.Exn.t)
  | Tick(unit)
  | Flights(Types.async(array(Types.flightInfo)));

/* let fetchFlights = (from, where, whenT) =>
   (. dispatch) => {
     dispatch(RequestFlights(from, where, whenT));
     Js.Global.setTimeout(
       () =>
         dispatch(
           ReceiveFlights([|
             {airline: "British Airways", price: 390, duration: 3.5},
             {airline: "KLM", price: 340, duration: 2.2},
           |]),
         ),
       3000,
     );
   }; */
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
      3000,
    );
  };