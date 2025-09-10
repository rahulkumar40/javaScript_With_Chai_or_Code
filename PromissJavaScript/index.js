// let firstPromise = new Promise((resolve, reject)=>{
//     function sayMyName(){
//     console.log("My name is Love Baber")
// }
// setTimeout(sayMyName, 10000);
// // return 1; // pending 
//     resolve(101);
// });
// console.log("Hi")

// // l->1

// let promise1 = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise fulfilled")
//     }
//     else reject("Promise reject Internal server error")
// })

// // promise chaning 
// promise1.then(message=>{
//     console.log("First msg : "+message)
//     return "promise fulfilled second message 20"
// })
// .then(message=>{
//     console.log("Second msg : "+ message)
//     return "promise fulfilled third msg 30"
// })
// .then(message=>{
//     console.log("third msg : "+message)
// })
// .catch(err=>{
//     console.log("Error in promise"+err)
// })
// .finally(msg=>{
//     console.log("Me to final hu me to paka chalunage ")
// })

// promise1
// .then((message)=>{
//     console.log("Then ke messge receive " + message)
// })
// .catch(error=>{
//     console.log("Error i "+error)
// })

let promise1 = new Promise((resolve , rejcet)=>{
    setTimeout(resolve, 1000, "first promise");
})
let promise2 = new Promise((resolve , rejcet)=>{
    setTimeout(resolve, 2000, "second promise");
})
let promise3 = new Promise((resolve , rejcet)=>{
    setTimeout(resolve, 4000, "third promise");
})

Promise.all([promise1, promise2, promise3])
.then(value=>{
    console.log(value)
})