// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE

import * as Block from "../../../node_modules/bs-platform/lib/es6/block.js";
import * as Curry from "../../../node_modules/bs-platform/lib/es6/curry.js";

function receiveFlights(param_0) {
  return /* ReceiveFlights */Block.__(1, [param_0]);
}

function failureFlights(param_0) {
  return /* FailureFlights */Block.__(2, [param_0]);
}

function tick(param_0) {
  return /* Tick */Block.__(3, [param_0]);
}

function flights(param_0) {
  return /* Flights */Block.__(4, [param_0]);
}

function requestFlights(_, _$1, _$2) {
  return (function (dispatch) {
      Curry._1(dispatch, /* Flights */Block.__(4, [/* Loading */1]));
      return setTimeout((function () {
                    return Curry._1(dispatch, /* Flights */Block.__(4, [/* Success */Block.__(0, [/* array */[
                                        /* record */[
                                          /* airline */"British Airways",
                                          /* price */390,
                                          /* duration */3.5
                                        ],
                                        /* record */[
                                          /* airline */"KLM",
                                          /* price */340,
                                          /* duration */2.2
                                        ]
                                      ]])]));
                  }), 3000);
    });
}

export {
  receiveFlights ,
  failureFlights ,
  tick ,
  flights ,
  requestFlights ,
  
}
/* No side effect */
