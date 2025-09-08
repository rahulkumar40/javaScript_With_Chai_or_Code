// if 

// const isUserLoggedIn = true;
// if (3==="3"){ // (true) --> go inside.|| (false) --> don't go inside
//   console.log("Execute")
// }
// else console.log("Not equal");

const temperature = 41
if(temperature===50){
  // console.log("less than 50")
}
else{ 
  // console.log("Temperatue is greater than 50")
}

// console.log('Execute')
// comperision operator 
// < , > <=, => ==, !=, ===, !==

const score = 200;
if(score > 100){
  const power = "fly";
  // console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

// const balance = 1000    // implicite scope 
// if(balance> 500) console.log("test")

// if(balance> 500) console.log("test1"), 
// console.log("test 2")


// if(balance < 500){
//   console.log("less than 500")
// } else if(balance < 750){
//   console.log("less than 750")
// }
// else if(balance < 900){
//   console.log("less than 900")
// }
// else {
//   console.log("less than 1200")
// }


// create a website account login 

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2==2){
  console.log("Allow to by course");
}

if(loggedInFromEmail || loggedInFromGoogle){
  console.log("User logged in ")
}