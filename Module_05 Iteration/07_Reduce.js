const myNum = [1, 2, 3]

const myTotal = myNum.reduce(function (acc, currval){
  console.log(`acc : ${acc} and currval : ${currval}`);
  return acc + currval;
}, 0)

console.log(myTotal)

const myTotal1 = myNum.reduce( (acc, curr) => (
  console.log(`acc : ${acc} and currval : ${curr}`),
  acc + curr
), 0)

console.log(myTotal1)


const shoppingCart = [
  {
    iemName : "js course",
    price : 2999
  },
  {
    iemName : "js course",
    price : 2999
  },
  {
    iemName : "js course",
    price : 2999
  },
  {
    iemName : "js course",
    price : 2999
  },
  {
    iemName : "js course",
    price : 2999
  }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice)