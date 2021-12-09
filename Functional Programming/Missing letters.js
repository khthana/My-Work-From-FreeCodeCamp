function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function fearNotLetter(str) {
  let str1 = str.split("");
  //console.log(str1);
  var i=0,check=1;
  while(check) {
    if (str[i+1]!=nextChar(str[i])) break;
    i++;
  }
  console.log(i,str[i]);
  if (i==str.length-1) return undefined
  else return nextChar(str[i]);
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));