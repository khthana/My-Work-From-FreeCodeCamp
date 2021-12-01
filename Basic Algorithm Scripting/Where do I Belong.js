function getIndexToIns(arr, num) {
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    console.log(arr);
    let count=0;
    for (let i=0; i < arr.length; i++) {
        if (num <= arr[i]) return count;
        count++;
    }
    
    return count;
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));