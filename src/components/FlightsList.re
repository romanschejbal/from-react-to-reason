open ReasonReact;

let component = statelessComponent("FlightsList");

let make = (~data, _children) => {
  ...component,
  render: _self =>
    <div>
      Actions.(
        switch (data) {
        | Idle => string("Not asked")
        | Start(_) => string("Loading...")
        | Success((data: Reducer.flightsData)) =>
          array(
            Array.map(
              flightInfo => <div> (string(flightInfo.airline)) </div>,
              data,
            ),
          )
        | Error(err) =>
          string(
            switch (Js.Exn.message(err)) {
            | None => "Unknown error occured"
            | Some(e) => e
            },
          )
        }
      )
    </div>,
};

let default =
  wrapReasonForJs(~component, jsProps => make(~data=jsProps##data, [||]));