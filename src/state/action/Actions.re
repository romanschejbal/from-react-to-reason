type from = string;

type where = string;

type whenT = string;

type flightInfo = {
  airline: string,
  price: int,
  duration: float,
};

type async('a) =
  | Idle
  | Loading
  | Success('a)
  | Error(Js.Exn.t);

[@bs.deriving accessors]
type action =
  | RequestFlights(from, where, whenT)
  | ReceiveFlights(array(flightInfo))
  | FailureFlights(Js.Exn.t)
  | Tick(unit)
  | Flights(async(array(flightInfo)));

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

/* [@bs.deriving accessors]
   type actionG('a) =
     | Flight: actionG(int); */
let toType =
  fun
  | RequestFlights(_, _, _) => "REQUEST_FLIGHTS"
  | Flights(_) => "FLIGHTS"
  | _ => "UNKNOWN_ACTION";