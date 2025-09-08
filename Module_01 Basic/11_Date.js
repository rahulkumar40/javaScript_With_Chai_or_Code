let myDate = new Date();
console.log(myDate)  //2024-09-05T16:49:40.529Z

console.log(myDate.toString())  //  Thu Sep 05 2024 22:19:40 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //  Thu Sep 05 2024
console.log(myDate.toISOString().split('T'[0]))
// console.log(myDate.toLocaleDateString()) //  5/9/2024
// console.log(myDate.toLocaleString())      //  5/9/2024, 10:19:40 pm
// console.log(typeof myDate)                // object




// console.log("My Own Date")
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)    //2023-01-22T18:30:00.000Z

// console.log(myCreatedDate.toString()) //Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023

// console.log(myCreatedDate.toLocaleDateString()) //23/1/2023
// console.log(myDate.toLocaleString())    //5/9/2024, 10:19:40 pm
// console.log(typeof myCreatedDate)       //object


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())  // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())  // 23/1/2023, 5:03:00 am

// let myCreatedDate = new Date("2024-09-20")  // YY-MM-DD
// console.log(myCreatedDate.toLocaleString())  // 20/9/2024, 5:30:00 am


// let myCreatedDate = new Date("01-10-2002")  // DD-MM-YY
// console.log(myCreatedDate.toLocaleString())  // 10/1/2002, 12:00:00 am


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/100));

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getFullYear())
console.log(newDate.getTime())



// const today = new Date();
// console.log(`Today is ${today.getDate()} - ${today.getMonth()} - ${today.getFullYear()} and this is week day's ${today.getDay()} time --> ${today.getHours()}`)



