function dropElements(arr, func) {
    let result = [];
    for (let i=0;i<arr.length;i++) {
      if (func(arr[i])) {return arr.slice(i)}
    }
    return result;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n > 4; }));