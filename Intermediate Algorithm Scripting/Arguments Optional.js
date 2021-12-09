function addTogether() {
    let returnValue;
    if (typeof arguments[0] === "number") {
      if (typeof arguments[1] === "undefined") {
        let firstArg = arguments[0];
  //      var sumTwoAnd = addTogether(arguments[0]);
        return function(secondVal) {
          let returnValue2;
          if (typeof secondVal === "number") {
            returnValue2=firstArg + secondVal;
          }
          return returnValue2;
        }
       }
       else if (typeof arguments[1] === "number") {
        returnValue = arguments[0] + arguments[1]; 
      }
    }
    return returnValue;
  }