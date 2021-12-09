function bin2dec(str) {
    let w = 128;
    let sum = 0;
    for (let i=0; i<8; i++) {
      sum += w*str[i];
      w /= 2;
    }
    return sum;
  }
  
  function binaryAgent(str) {
    var chr = str.split(" ");
    var newStr = "";
    for (var i=0; i<chr.length; i++) {
      var c = bin2dec(chr[i]);
      newStr += String.fromCharCode(c);
    }
    return newStr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");