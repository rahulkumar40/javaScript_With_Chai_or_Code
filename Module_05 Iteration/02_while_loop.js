// let num = 10;
// while(num>0){
// console.log(num);
// num--;
// }

// for of 

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4,5 ]
for (const element of arr) {
  console.log(element);
}

const greeting = "hello world"
for (const element of greeting) {
  console.log(`Each char is ${element}`)
}
const greet = "hello world"
for (const element of greet) {
  if(element===' ') continue
  else console.log(`Each char is ${element}`)
}

// map 

const map = new Map(); // it contain unick value and also follow sequence
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map)


for (const key of map) {
  // console.log(key)
} // it give array of map [key, value]
// [ 'IN', 'India' ]
// [ 'USA', 'United State Of America' ]
// [ 'FR', 'France' ]


for (const [key, value] of map) {
  // console.log(key, ':-', value)
}
// IN :- India
// USA :- United State Of America   
// FR :- France


const myObject = {
  'game1' : 'NFS',
  'game2' : 'Spiderman'
}

// for (const key of myObject) {
//   console.log(key)
// }