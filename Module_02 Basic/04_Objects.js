// singleton

// const tinderUserK = {}
// console.log(tinderUserK); //{}


const tinderUser = new Object();

// console.log(tinderUser); //{}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// nested object **
const regularuser = {
  email : "some@gmail.com",
  fullnmae: {
    userfullname : {
      firstname : "hitesh",
      lastname : "choudhary"
    }
  }
}

// console.log(regularuser.fullnmae) //{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } } 

// console.log(regularuser.fullnmae.userfullname) //{ firstname: 'hitesh', lastname: 'choudhary' }

// console.log(regularuser.fullnmae.userfullname.firstname) // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2} inner to inner 

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user =[ 
  {
    id : 1,
    email : "hitehs"
  },
  {
    id : 2,
    email : "hitehs1"
  } ,
  {
    id : 3,
    email : "hitehs2"
  }  ,
  {
    id : 4,
    email : "hitehs3"
  }
]
// vvi
const email = user[1].email;
console.log(email)

console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ '123abc', 'Sammy', false ]
console.log(Object.values(tinderUser).length) //3


console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //true




