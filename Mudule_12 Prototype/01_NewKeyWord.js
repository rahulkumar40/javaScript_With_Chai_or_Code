function multiplaeBy5(num){
    return num*5;
}

multiplaeBy5.power = 2;
console.log(multiplaeBy5(5))
console.log(multiplaeBy5.power)
console.log(multiplaeBy5.prototype) 
// bydefault some content set means internal property of it if it may posible.

function creatUser(username, score){
    this.username = username;
    this.score = score;
}

creatUser.prototype.increment = function(){
    this.score++;
}

creatUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}
const chai = new  creatUser("chai", 25);
const tea = new creatUser("tea", 250);

chai.printMe();
tea.printMe()

/* 
here's what happens bahind the scenes when the new keyword is usde: 
A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the protoype of the constructor  */