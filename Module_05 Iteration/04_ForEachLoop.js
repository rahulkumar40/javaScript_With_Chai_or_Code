const codding = ["js", "ruby", "python", "java", "cpp", "R"]

codding.forEach(element => {
  console.log(element)
});


codding.forEach(function (idx) {
  console.log(idx)
})


codding.forEach(  (item) => {
  console.log(item)
})

function printMe(item){
  console.log(item);
}

codding.forEach(printMe)

codding.forEach( (item, index, arr)=> {
  console.log(item, index, arr)
})


const myCodding = [
  {
    languageName : "javaScript"
    , languageFile : "js"
  },
  {
    languageName : "java"
    , languageFile : "java"
  },
  {
    languageName : "python"
    , languageFile : "py"
  }
]

myCodding.forEach( (item) =>{
  
  console.log(item.languageName + item.languageFile)
})