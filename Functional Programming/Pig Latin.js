function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
  }
  
  function translatePigLatin(str) {
    var newStr='', newStr2='';
      if (vowelTest(str[0]) == true) {
        newStr = str+'way';
      } else {  
        let word = str.split('');
        console.log(word);
        let i=0;
        for (i=0; i< word.length; i++) {
            if ((vowelTest(word[i]) == false)) {
              newStr += word[i];
            } else {
              break;
            }
        }
        //console.log(str.substring(i));
        //console.log(newStr);
        newStr = str.substring(i)+newStr+'ay';
        console.log(newStr);      
      }
    return newStr;
  }
  
  translatePigLatin("schwartz");