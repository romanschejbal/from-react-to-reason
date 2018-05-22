open ReasonReact;

open Types;

let component = statelessComponent("FlightsList");

let make = (~data, _children) => {
  ...component,
  render: _self =>
    <div>
      (
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
        )
        |> array
      )
    </div>,
};

let default =
  wrapReasonForJs(~component, jsProps =>
    make(~data=jsProps##data, jsProps##children)
  );
/*
 [@bs.module]
 external myJSReactClass : ReasonReact.reactClass = "./myJSReactClass";

 let make = (~name: string, ~age: option(int)=?, children) =>
   ReasonReact.wrapJsForReason(
     ~reactClass=myJSReactClass,
     ~props={"name": name, "age": Js.Nullable.fromOption(age)},
     children,
   ); */