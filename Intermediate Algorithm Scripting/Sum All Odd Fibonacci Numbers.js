function sumFibs(num) {
    let a=1;
    let b=1;
    let sum=1;
    while(b <= num) {
      if (b %2 == 1) {
        sum += b;
      }
      let temp=b;
      b = a+b;
      a = temp;
    
    }
    return sum;
    }
    
    sumFibs(1000);