function repeatStringNumTimes(str, num) {
    if (num <=0) return "";
    else {
      let str1 = str;
      for (let i=0; i<num-1; i++) 
        str = str+str1;
        console.log(str);
    }
    return str;
  }
  
  repeatStringNumTimes("abc", 1);