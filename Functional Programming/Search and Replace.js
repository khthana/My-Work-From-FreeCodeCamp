function myReplace(str, before, after) {
    let stringCollection = str.split(" ");
  
    function wordIsCapitalized(word) {
      return word[0] === word[0].toUpperCase();
    }
  
    return stringCollection.map(function(individualWord) {
      if (individualWord === before) {
        if (wordIsCapitalized(individualWord)) {
          after = after[0].toUpperCase()+after.slice(1);
        } else {
          after = after[0].toLowerCase()+after.slice(1);
        }
        return after;
      }
      return individualWord
    }).join(" ");
  }
  
  
  let result = myReplace("I think we should look up there", "up", "Down");
  console.log(result)