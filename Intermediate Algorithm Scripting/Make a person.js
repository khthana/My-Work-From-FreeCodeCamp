var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var splitName, firstName, lastName, fullName;
  
    init(firstAndLast);
  
    this.getFirstName = function () {
      return firstName;
    };
    this.getLastName = function () {
      return lastName;
    };
    this.getFullName = function() {
      return fullName;
    };
    this.setFirstName = function (first) {
      firstName = first;
      changeName();
    };
    this.setLastName = function (last) {
      lastName = last;
      changeName();
    };
    this.setFullName = function (firstAndLast) {
      init(firstAndLast);
    };
  
    function init(firstAndLast) {
      splitName = firstAndLast.split(' ');
      firstName = splitName[0];
      lastName = splitName[1];
      fullName = firstName + ' ' + lastName;
    }
    function changeName() {
      fullName = firstName + ' ' + lastName;
    }
    
};
var bob = new Person('Bob Ross');
bob.getFullName();