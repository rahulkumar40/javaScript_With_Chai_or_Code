// console.log("h")
// console.log("hk")
// console.log("ha")
// console.log("had")
// console.log("hkd")

function sayMyName(){
  console.log("h")
  console.log("hk")
  console.log("ha")
  console.log("had")
  console.log("hkd")
}
// sayMyName // reference --> where function is presernt

// sayMyName();  // function call

function addTwoNumber(number1, number2){ //parameter
   console.log(number1 + number2);
}
// addTwoNumber(4, 5)   // 9  //argumnet 
// addTwoNumber(4, "4") // 44
// addTwoNumber(4, "a") // 4a
// addTwoNumber(4, null) // 4

// it will give us undefined because we are only doing console the output.

// const results = addTwoNumber(9,6); //15 at the only calling time

// console.log("result value " , results) // result value undefine

function addTwoNumbers(number1, number2){ //parameter
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
const resultss = addTwoNumbers(4,6);
// console.log(resultss) // 10

// function loginUserMessage(username){
//   return `${username} just logged in`
// }

// console.log(loginUserMessage("Rahul kumar")) //Rahul kumar just logged in
// console.log(loginUserMessage()) //undefined just logged in


// code reusability

// function loginUserMessage(username){
//   // if(username==undefined){
//   //   console.log("Please enter a username")
//   //   return;
//   // }
//   // at if() we can use --> !username or undefined
//   if(!username){ console.log("Please ente a username");
//     return;
//   }
//   return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh")) //hitesh just logged in
// console.log(loginUserMessage()) //Please ente a username




// defualt value 
function loginUserMessage(username = "sam"){
  if(!username){ console.log("Please ente a username");
    return;
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage()) //sam just logged in
// console.log(loginUserMessage("hitesh")) //hitesh just logged in

//  -----> <------ --------> <--------- 

function calculateCartPrice(...num1){
  return num1;
}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500)) 
// rest  operator --> 

// -------> ---------> --------> ----------> ------> 

function calculateCartPrice1(val1, val2, ...num1){
  return num1;
}

console.log(calculateCartPrice1(2))
console.log(calculateCartPrice1(200, 400, 500, 4000)) 

// -------> ---------> --------> ----------> ------> 
const user = {
  username : "hitesh", 
  price : 999
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) //Username is hitesh and price is 999

// -------> ---------> --------> ----------> ------> 
// we can also pass the "handleObject(user)" at user any object like
handleObject({
  username : "rahul",
  price : 8594
})


// -------> ---------> --------> ----------> ------> 
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){
  return getArray[0];
}

// console.log(returnSecondValue(myNewArray))  // 200
console.log(returnSecondValue([200, 400, 100, 600]))  // 200
