function whatIsInAName(collections, source) {
    var arr = [];
    // Only change code below this line
    collections.forEach(collection => {
      let index=0;
      for (let key in source) {
        //console.log(collection,key);
        if (collection[key] == source[key]) {
          index+=1;
        }
        if (index === Object.keys(source).length){
          arr.push(collection);
        }
      }
    });
    // Only change code above this line
    console.log(arr)
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })