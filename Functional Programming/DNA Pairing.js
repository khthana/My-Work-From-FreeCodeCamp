function pairElement(str) {
    let result = [];
    let str1 = str.split("");
    console.log(str1);
    for (let i=0; i<str1.length; i++) {
      if (str[i] == 'A') result.push(['A','T']);
      if (str[i] == 'T') result.push(['T','A']);
      if (str[i] == 'C') result.push(['C','G']);    
      if (str[i] == 'G') result.push(['G','C']);   
    }
    console.log(result);
    return result;
  }
  
  pairElement("GCG");