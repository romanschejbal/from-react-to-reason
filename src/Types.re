[@bs.deriving jsConverter]
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