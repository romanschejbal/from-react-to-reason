// Generated by BUCKLESCRIPT VERSION 3.1.0, PLEASE EDIT WITH CARE


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

function addSuffix(suffix, x) {
  return x + suffix;
}

export {
  flightInfoToJs ,
  flightInfoFromJs ,
  addSuffix ,
  
}
/* No side effect */
