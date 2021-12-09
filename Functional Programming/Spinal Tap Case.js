function spinalCase(str) {
    let words = [];
    let str2 = str.replace(/([A-Z])([a-z])/g,' $1$2');
    console.log(str2);
    str2 = str2.toLowerCase()
    words = str2.split(/[^A-Za-z0-9]/);
    words = words.filter(value => {
      return value != ''
    })

    let newStr = words.join("-")
    console.log(newStr);
    return (newStr);  
}

spinalCase("thisIsSpinalTap");

