// singleton
// Object.create;

// object literals 

const mySym = Symbol("key1")
const mySymbol = Symbol("key2")


const JsUser = {
  name: "hitesh",
  "full nmae" : "hitesh choudhary",
  age : 19, 
  location : "jaipur",
  email : "hitesh@google.com",
  isLosggedIn : false,
  lastLoginDays : ["Monday", "Saturday"],

  mySym :"mykey1",
  [mySymbol]:"key2"
};
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full nmae"])
console.log(JsUser["mySym"])
console.log(typeof(JsUser[mySym]))
console.log(JsUser[mySymbol])
console.log(typeof(JsUser[mySymbol]))


JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser);

JsUser.email = "hiteshsir@gamil.com"
console.log(JsUser)


JsUser.greeting = function(){
  console.log("Hello js user")

}
console.log("After")
console.log(JsUser.greeting)
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`)

}
console.log(JsUser.greetingTwo)
console.log(JsUser.greetingTwo())