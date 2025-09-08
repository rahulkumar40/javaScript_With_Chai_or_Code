// forin loop 
const myObject = {
  js : 'JavaScript',
  cpp: 'C++', 
  rb : 'ruby', 
  swift: 'Sift by apple'
}

for (const key in myObject) {
  // console.log(key)
}

// output --->
 /* 
js
cpp
rb
swift */
// ---------------> 

for (const key in myObject) {
  // console.log([key])
}
// output --->
 /* 
[ 'js' ]
[ 'cpp' ]
[ 'rb' ]
[ 'swift' ] */
// --------------->

for (const key in myObject) {
  // console.log(myObject[key])
}
// output ---> which are present into the "object" directly accessed by this method.
 /* 
JavaScript
C++
ruby
Sift by apple*/
// ---------------> 
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`)
}
/* ------> output  --------> --------> 
js shortcut is for JavaScript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for Sift by apple
------>   --------> --------> 
*/

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(`key ${key} value : ${programming[key]} `)
}
/* 
------> output  --------> --------> 
key 0 value : js 
key 1 value : rb
key 2 value : py
key 3 value : java
key 4 value : cpp
----> -------> -------> ---------> */

// -------->  ------------> ------------> Map() -------> -------> 
// forin loop don't work on the map() function. show it don't give any output
const map = new Map(); // it contain unick value and also follow sequence
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
  console.log(key)
}
// noting will print.

