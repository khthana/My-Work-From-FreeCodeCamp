function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.reduce((status, person) => 
      (status && person.hasOwnProperty(pre) && !!person[pre]),
      true);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");