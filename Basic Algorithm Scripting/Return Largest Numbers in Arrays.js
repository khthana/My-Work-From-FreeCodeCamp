function largestOfFour(arr) {
    let arr1 = [];
    let max = -9999;
    for (let i=0; i < arr.length; i++) {
        max = -9999;
        for (let j=0; j < arr[i].length; j++) {
            if (arr[i][j] > max) 
                max = arr[i][j];
        }
        arr1.push(max);
    }
    return arr1;
  }
  
 console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
 console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));