function uniteUnique(arr) {
    console.log(arguments,arguments.length);
    var newArr = arguments[0];
    for(var i=1; i<arguments.length; i++) {
      for(var j=0; j<arguments[i].length ; j++) {
        console.log(newArr.indexOf(arguments[i][j]))
        if (newArr.indexOf(arguments[i][j]) == -1) {
          newArr.push(arguments[i][j]);
        }
      }
    }
    console.log(newArr);
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);