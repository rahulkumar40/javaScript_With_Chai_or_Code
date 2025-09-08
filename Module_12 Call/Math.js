const descripter =  Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter )

const chai = {
    name : 'Ginger chai',
    price : 450, 
    isAvailable : true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

const k = Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable : false
});
