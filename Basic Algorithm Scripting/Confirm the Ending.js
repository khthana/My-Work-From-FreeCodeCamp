function confirmEnding(str, target) {
    let result = str.substring(str.length-(target.length), str.length);
    console.log(result);
    return result == target;
  }
  
  console.log(confirmEnding("Bastian", "an"));
  