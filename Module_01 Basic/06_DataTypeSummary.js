// Primitive Type

// 7 type : String, Number, Boolean, null, undefine, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail ; //= undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log("id --> " , id)
console.log("anotherId --> " , anotherId)

console.log(id==anotherId)


const bigNumber = 1234323585748483;
console.log(bigNumber)
console.log(typeof(bigNumber))

// Dynamic type language or not --> Dynamic type language

// Reference Type (Non Primitive)

// Array, Objects, Function


const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
  name:"hitesh",
  age:22, 
}

const myfunction= function(){
  console.log("Hello World")
}
myfunction()

console.log("myfunction type :: ", typeof(myfunction))


