//Array 

const myArr = [0, 1, 2, 3, 4, 5]

// Array Method

// myArr.push(8)
// myArr.pop(8)
// console.log(myArr)
// [0, 1, 2, 3, 4, 5]

myArr.unshift(3)  // add at start index of array 
// [3, 0, 1, 2, 3, 4, 5]
console.log(myArr)
myArr.shift()
console.log(myArr) // delete at starting index value 

// console.log(myArr.includes(9)) // false 
// console.log(myArr.indexOf(9)) // -1
// console.log(myArr.includes(1)) // true 
// console.log(myArr.indexOf(1)) // 1

// const newArray = myArr.join()
// console.log(myArr)
// console.log(`${newArray} -->  ${typeof newArray}`)
// [ 0, 1, 2, 3, 4, 5 ]
// 0,1,2,3,4,5 -->  string

// slice , splice 

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3);
console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3);
console.log(myn2)
console.log("C ", myArr)

