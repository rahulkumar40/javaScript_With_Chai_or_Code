const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const numNum = myNumbers.map( (num) => num+10)

console.log(numNum);

const newNum = myNumbers.map( (num) => { return num+10})

console.log(newNum);

// channing method 


const newNumber = myNumbers
.map( (num) => (num * 10))
.map( (num) => num + 1 )
console.log(newNumber)


const newNumber1 = myNumbers
.map( (num) => (num * 10))
.map( (num) => num + 1 )
.filter( (num) => num>=40)
console.log(newNumber1)
