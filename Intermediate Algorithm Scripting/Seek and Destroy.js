function destroyer(arr) {
    var arr1 = arguments[0];
    var arr2 = Object.values(arguments).splice(1);
    console.log(arr1,arr2);
    for (var i=0; i<arr2.length; i++) {
      var filteredAry = arr1.filter(function(e) { 
        //console.log (arguments[i])
        return e !==  arr2[i];
      });
      arr1 = filteredAry;
      console.log (filteredAry)    
    }
    return filteredAry;
  }
  