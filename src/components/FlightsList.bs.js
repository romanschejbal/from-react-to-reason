// Generated by BUCKLESCRIPT VERSION 3.1.0, PLEASE EDIT WITH CARE

import * as $$Array from "../../node_modules/bs-platform/lib/es6/array.js";
import * as React from "react";
import * as Pervasives from "../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as ReasonReact from "../../node_modules/reason-react/src/ReasonReact.js";
import * as Js_primitive from "../../node_modules/bs-platform/lib/es6/js_primitive.js";

var component = ReasonReact.statelessComponent("FlightsList");

function $pipe$unknown$great(x, def) {
  if (x) {
    return x[0];
  } else {
    return def;
  }
}

function make(data, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var tmp;
              tmp = typeof data === "number" ? (
                  data === 0 ? "Not asked" : "Loading..."
                ) : (
                  data.tag ? $pipe$unknown$great(Js_primitive.undefined_to_opt(data[0].message), "An error occurred") : $$Array.map((function (flightInfo) {
                            return React.createElement("div", undefined, React.createElement("h2", undefined, flightInfo[/* airline */0]), React.createElement("p", undefined, "Price: $" + String(flightInfo[/* price */1]), " | Duration: " + (Pervasives.string_of_float(flightInfo[/* duration */2]) + "hours")));
                          }), data[0])
                );
              return React.createElement("div", undefined, tmp);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, jsProps.children);
      }));

export {
  component ,
  $pipe$unknown$great ,
  make ,
  $$default ,
  $$default as default,
  
}
/* component Not a pure module */
