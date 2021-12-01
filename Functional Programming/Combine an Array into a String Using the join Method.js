function sentensify(str) {
    // Only change code below this line
      let words = [];
      words = str.split(/[^A-Za-z0-9]/);
      let newStr = words.join(" ")
      return newStr;
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));
  