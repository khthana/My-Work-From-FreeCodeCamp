function nonMutatingSplice(cities) {
    // Only change code below this line
    let newArray = [];
    newArray = cities.slice(0,3);
    console.log(newArray);
    return newArray;
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);