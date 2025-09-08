// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubeNmae = "rahulKumar"

let anoterhNmae=myYoutubeNmae;

console.log(myYoutubeNmae)
console.log(anoterhNmae)


let user = {
  email : "user@google.com",
  upi : "7875@upi"
}

let userTwo = user;
console.log(userTwo)
console.log(user)

console.log("Ater changes")

userTwo.email = "hitesh@google.com"
console.log(userTwo)
console.log(user)