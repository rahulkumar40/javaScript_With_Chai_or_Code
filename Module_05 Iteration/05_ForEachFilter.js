// // 
// const codding = ["js", "ruby", "python", "java", "cpp", "R"]

// codding.forEach( (item) => {
//   console.log(item)
// })

// const values = codding.forEach((item)=>{
//   // stemp 1
//   console.log(item);
//   // stem 2
//   return item;
// })// it don't return any value. 

// console.log(values)

// ----> ------> -----> 

const myNum = [1, 2, 3, 4, 5 ,6 , 7, 8]

myNum.filter((num)=> num>5  ); // return but not contain anywere 

const newNums = myNum.filter((num)=> num>5)
console.log(newNums)

const newNums1 = myNum.filter((num)=> {
  num>5
} )

console.log(newNums1)

const newNums2 = myNum.filter((num)=> (
  num>5
)
 )
console.log(newNums2)

const newNums3 = myNum.filter((num)=> {
  return num>5
} )

console.log(newNums3)



const newN = [];
newNums.forEach((num)=> {
  if(num>4) newN.push(num)
})
console.log(newN)

const books = [
  {title: "Book one", genre : "fiction", publish : 1980, edition:2017},
  {title: "Book two", genre : "fiction", publish : 1960, edition:2014},  
  {title: "Book three", genre : "History", publish : 1980, edition:2016}, 
  {title: "Book four", genre : "fiction", publish : 2000, edition:2000},  
  {title: "Book five", genre : "fiction", publish : 1980, edition:2014},
  {title: "Book six", genre : "Fiction", publish : 1970, edition:2023},
  {title: "Book seven", genre : "History", publish : 1970, edition:2003},
  {title: "Bokk eight", genre : "Science", publish : 2000, edition:2016},
  {title: "Bokk nine", genre : "Non_Fiction", publish : 1970, edition:2023},
]

const userBooks = books.filter((bk)=>(bk.genre === 'History'))
console.log(userBooks);

const userBookAfterY = books.filter((bk) => (bk.publish>=2000))
console.log(userBookAfterY)

const userBookAfterY1 = books.filter((bk) => (bk.publish>=1990 && bk.genre==='History'))
console.log(userBookAfterY1) 