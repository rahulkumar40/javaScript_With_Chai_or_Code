const accountId = "4545445";
let accountEmail = "rahul4004k@gmail.com";
var accountPassword = "767343";
accountCity = "Jaipur";
console.log(accountId);

// accountId = 2;  not allowed

let accountState ;  // undefine

/*
  prefer not ot use 'var'
  because of issu in block scope and functional scope.

*/

accountEmail = "rah@gmail.com";
accountPassword = "1324332";
accountCity = "Patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

