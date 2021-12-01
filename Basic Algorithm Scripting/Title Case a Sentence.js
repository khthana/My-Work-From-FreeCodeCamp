function titleCase(str) {
    let word = "";
    let str2="";
    let str1 = str.split(" ");
    for (let i=0; i < str1.length; i++) {
        let lower = str1[i].toLowerCase();
        word = str1[i].charAt(0).toUpperCase()+lower.slice(1);
        str2 += word;
        if (i != str1.length-1) str2 += " ";
    }
    return str2; 
}
console.log(titleCase("I'm a little tea pot")); 