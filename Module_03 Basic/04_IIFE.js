/// Immediately Invoked Function Expressions (IIFE)

// ----- > type 1  
// function chai(){
//   console.log(`DB CONNECTED`)
// }

//----- > type 2 

// function chai(){
//   console.log(`DB CONNECTED`)
// }() // gice error

// ----- > type 3  

(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`)
})(); // DB CONNECTED 
// it is used to implement immidiately execute 
// global scope ke polution se bachane ke liye

// ----- > type 4 

((name)=>{
  // unnamed IIFE 
  console.log(`DB CONNECTED Arrow ${name}`)
})("hitesh") ; // argument into IIFE function 