function findLongestWordLength(str) {
    let str1 = str.split(" ");
    let max = 0;
    for (let i = 0; i < str1.length ; i++) {
        if (str1[i].length > max)
            max = str1[i].length;
    }
    return max;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));