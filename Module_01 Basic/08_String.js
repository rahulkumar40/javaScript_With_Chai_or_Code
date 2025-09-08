const name = "rahul"
const repoCount = 50

console.log(name + repoCount + "Value")

// String interplision
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("Rahul-Kumar")
gameName
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

// lenght property 
console.log(gameName.length)

// 
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName)

console.log(gameName.charAt(4))

console.log(gameName.indexOf('u'))

const newString = gameName.substring(0, 5)
console.log(newString)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringONe =  "    rahul    "
console.log("New String initial --> " , newStringONe)

console.log("Trim usues         --> ", newStringONe.trim())
/*
New String initial -->      rahul
Trim usues         -->  rahul
*/

// in url any space is replace by %20 as 
const url = "https://hitesh.com/hitsh%20choudary"
console.log(url.replace('%20', '-')) //https://hitesh.com/hitsh-choudary


const present = url.includes('hitesh')
console.log(present) // true

const nameAs = "rahul kumar sah from siwan bihar"
console.log(nameAs.split('*'))
console.log(nameAs.split("👉🏿"))
const ansString = nameAs.split()
console.log(ansString)