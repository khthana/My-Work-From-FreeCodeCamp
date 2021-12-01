function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(3);
  
  // Only change code below this line
  console.log(myHouse instanceof House);