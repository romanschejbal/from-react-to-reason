// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE


function flightInfoToJs(param) {
  return {
          airline: param[/* airline */0],
          price: param[/* price */1],
          duration: param[/* duration */2]
        };
}

function flightInfoFromJs(param) {
  return /* record */[
          /* airline */param.airline,
          /* price */param.price,
          /* duration */param.duration
        ];
}

export {
  flightInfoToJs ,
  flightInfoFromJs ,
  
}
/* No side effect */