// fetch('https:something.com').

// es6 .....> 
// it a call back function
const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, Cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // it will call the then() method
    }, 1000);
});
// console.log(promisesOne)



// consumtation of promise --> direct connectio  with "resolve"
promisesOne.then(function(){
    console.log("Promise consumedS")
});
// at 1st time then is not connected to promise
// so as we know then is connected to the resolve() then it have to call inside the promise setTime.
// then communication will build



new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve(); // it will call the then() method
    }, 1000);
})

.then(function(){
    console.log("Async 2 resolved")
})

// ----> -----> ------> ------> -----> 
const promisesTree = new Promise(function(resolve, reject){
    setTimeout(() => {
        // console.log("")
        resolve({username : 'chai', email:'chai@exampe.cim'})
    }, 1000);
})

promisesTree.then(function(user){
    console.log(user)
})


// ----> -----> -----> ---> -----> 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Rahul kumar", password : "234"});
        }
        else{
            reject("Error : Something went wrong");
        }
    }, 1000)
})

// call back hell 
promiseFour.then((user)=>{
    console.log(user)
    return user.username;
}).then((user)=>{
    console.log(user)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolve or rejected"))


// ----> -----> -----> ---> -----> 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject("Error: JS went wrong")
        }
    }, 1000);
});

// async can't handle error
async function consumePromiseFive(){
   try {const response = await promiseFive
    console.log(response);}
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try{const response = await fetch('https://api.bring.com/address/api-docs/address');
//         // console.log(response) it will direct give all response 

//     const data = await response.json();
//     // it will take time to conver so we use await
//     console.log(data)
//     }
//     catch(error){
//         console.log("E : ", error)
//     }
// }
// getAllUser();

fetch("https://api.bring.com/address/api-docs/address").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);

}).catch((error)=> console.log(error))



