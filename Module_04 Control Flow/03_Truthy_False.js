
const userEmail = "h@hitesh.ai"
const userEmail1 = ""
const userEmail2 = []


if(userEmail){
  console.log("Got user email")
  
}
else{
  console.log("Don't have user email")
}
if(userEmail1){
  console.log("Got user empty string")
  
}
else{
  console.log("Don't have empty string ")
}
if(userEmail2){
  console.log("Got user array ")
  
}
else{
  console.log("Don't have user array ")
}

// false --> 0, -0, BigInt 0n , "", null , undefine, NaN 

// truthy value --> 
// "0", 'fasle', " ", [], {}, function(){} : empty function 

if(userEmail2.length ===0){
  console.log("Array is empty")
}

const emptyObj = {}
/// object . key (to array convert)
if(Object.keys(emptyObj).length ===0){
  console.log("object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1 ;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 10 // 10
val1 = null ?? undefined // undefine
val1 = null ?? 5?? 56 // 5
val1 = null ?? //here is present a function whitch work on large data and return null or undefine value or any value.
console.log(val1)

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("price is greater than 80") : console.log("price is less than 80")