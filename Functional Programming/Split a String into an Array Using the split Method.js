function splitify(str) {
    // Only change code below this line
    let words = [];
    words = str.split(/[^A-Za-z0-9]/)
    return words
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));