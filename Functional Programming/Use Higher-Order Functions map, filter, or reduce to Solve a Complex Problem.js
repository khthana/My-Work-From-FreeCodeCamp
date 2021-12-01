const squareList = arr => {
    let result = [];
    result = arr.filter(value => {
      return value > 0 && Number.isInteger(value)
    })
    result = result.map(value => {return value * value})
    //console.log(result);
    // Only change code below this line
    return result;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);