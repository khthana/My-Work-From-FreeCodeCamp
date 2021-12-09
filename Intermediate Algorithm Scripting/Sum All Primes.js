function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

function sumPrimes(num) {
  var sum=0;
  for(var i=1; i<= num; i++) {
    //console.log(i,isPrime1(i));
    if (isPrime1(i))
      sum += i;
  }
    return sum;
}

console.log(sumPrimes(977));