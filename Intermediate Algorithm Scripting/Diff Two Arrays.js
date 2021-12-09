function diffArray(arr1, arr2) {

    var newArr1 = arr1.filter(x => arr2.indexOf(x) === -1);
    var newArr2 = arr2.filter(x => arr1.indexOf(x) === -1);
    var newArr = newArr1.concat(newArr2);
    console.log (newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 
