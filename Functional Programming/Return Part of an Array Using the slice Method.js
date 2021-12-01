function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let newArray = [];
    newArray = anim.slice(beginSlice,endSlice);
    console.log(newArray);
    return newArray;
  
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  