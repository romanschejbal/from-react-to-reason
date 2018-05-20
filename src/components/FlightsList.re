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
              flightInfo =>
                <div>
                  <h2> (string(flightInfo.airline)) </h2>
                  <p>
                    (string("Price: $" ++ string_of_int(flightInfo.price)))
                    (
                      string(
                        " | Duration: "
                        ++ string_of_float(flightInfo.duration)
                        ++ "hours",
                      )
                    )
                  </p>
                </div>,
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
  wrapReasonForJs(~component, jsProps =>
    make(~data=jsProps##data, jsProps##children)
  );