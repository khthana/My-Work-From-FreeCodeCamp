function sumAll(arr) {
    let start=arr[0];
    let end=arr[1];
    if (start > end) {
      let tmp = start;
      start = end;
      end = tmp;
    }
    let sum = 0;
    for (let i=start ; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([1, 4]);