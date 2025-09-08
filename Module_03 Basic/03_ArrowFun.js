// Array function =>(){ }
  const user = {
    username: "hitesh", 
    price : 999,

    welcomeMessage : function(){
      console.log(`${this.username} , welcome to website`);
      
      console.log(this)
    }
  }

  // user.welcomeMessage;
  // user.welcomeMessage();

  // user.username = "sam"
  // user.welcomeMessage()

  // console.log(this)


  // function chai(){
  //   let username = "hitesh"
  //   console.log(this.username)

  // }
  // chai()


// const chai = function(){
//   let username = "hitesh"
//   console.log(this.username)
// }

// chai();

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
//   }
   // {} output
//   chai();

  // explicitly return 
  // const addTwo = (num1, num2) => {
  //   return num1+num2;

  // }
  // console.log(addTwo(5, 6))

  // implicite return 
  const addTwo = (num1, num2) => num1+num2;
  console.log(addTwo(5, 6))
  
  // react most used arrow fun ::
  const addn= (num1, num2) => (num1 + num2)
  console.log(addn(45, 54))

  const add = (num1, num2) => ({username : "hitesh"}) // direct return the output inside the (...... it .....  ) 
  // no need of any return message 
  console.log(add(45, 54))

  const myarray = [4, 5, 6, 7, 4];
  myarray.forEach(() => {
    
  })