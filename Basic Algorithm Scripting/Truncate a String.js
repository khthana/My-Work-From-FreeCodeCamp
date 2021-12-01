function truncateString(str, num) {
    let str1 = "";
    if (str.length <= num) return str;
    else {
      str1 = str.substring(0,num);
      str1 += "...";
    }
    return str1;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);