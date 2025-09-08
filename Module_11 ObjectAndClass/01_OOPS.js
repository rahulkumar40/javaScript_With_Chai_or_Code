// const user = {
//     username : 'hitesh',
//     loginCount : 8,
//     signedIn : true,
//     getUserDetails: function(){
//         // console.log("Got User Details from Database ");
//         console.log(`user name : ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user)
// // console.log(user.username)
// console.log(user.getUserDetails())

// // global context  of this class object element or attribute. 
// console.log(this)

// const promiseOne = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
    // or not  not any effect on the final output 
}
const userOne = user("rahul", 13, true) // 
const user4 = new user("hitesh", 143, true) // it will override 

const userTwo = new user("Hitesh", 13, true) // it will give new intence of object 
const user3 = new user("rahul", 13, true)
console.log(userOne)
console.log(userTwo)
console.log(user3)

function user1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
    // or not  not any effect on the final output 
}
const userDeteail = new  user1('rahul', 858, true)
console.log(userDeteail)
console.log(userDeteail.constructor)
//[Function: user1] 
// it is referce about its function 

