// Only change code below this line
function urlSlug(title) {
    let words = [];
    let newtitle = title.toLowerCase();
    newtitle = newtitle.trim();
    words = newtitle.split(/[^A-Za-z0-9]/);
    words = words.filter(value => {
      return value != ''
    })
    console.log(words);
    let newStr = words.join("-")

    return (newStr);
}
// Only change code above this line\
urlSlug(" Winter Is  Coming");