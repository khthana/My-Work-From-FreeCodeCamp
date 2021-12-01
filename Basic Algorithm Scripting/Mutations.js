function mutation(arr) {
    let str1=arr[0].toLowerCase();
    let str2=arr[1].toLowerCase();
    let arr1=str1.split("");
    let arr2=str2.split("");
    console.log(arr1);
    console.log(arr2);
    let check = true;
    for (let i=0 ; i< arr2.length ; i++) {
      if (arr1.includes(arr2[i])) ;
      else {
        check = false;
      }
      console.log(check);
    }
    return check;
  }
  
  console.log(mutation(["Alien", "line"]));