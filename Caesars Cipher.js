var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function rot13(str) {
  var newStr = "";
  var c=0,pos=0;
  for (var i=0 ; i < str.length; i++) {
    c = str[i].toLowerCase();
    pos = alphabet.indexOf(c);
    if (pos == -1) {
      newStr += str[i];
    } else {
      newStr += alphabet[pos+13].toUpperCase();
    }

  }
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");