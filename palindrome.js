function palindrome(str) {
    var str1 = str.replace(/[^0-9a-z]/gi, '');
    var str1 = str1.toLowerCase();
    console.log(str1)
    var half = Math.floor(str.length/2);
    console.log(half)
    var t = true;
    for (var i=0; i<half ; i++) {
      console.log(str1[i], str1[str1.length-i-1]);
      if (str1[i] != str1[str1.length-i-1])
        t = false;
    }
    console.log(t);
    return t;
  }
  
  
  
  palindrome("eye");