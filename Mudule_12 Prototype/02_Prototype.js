let myName = "hitesh     "

console.log(myName.truelength);

console.log(myName.trim().length) //6 
console.log(myName.length) // 11

let myHeros = ["Thor", "spiderman"]  

let heroPower = {
    thor: "Hammer",
    spider: "sling",
    geSpiderPower:function(){
        console.log(`Spidy power is ${this.spider}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`)
}

Array.prototype.heyHitsh = function(){
    console.log(`Hitesh says hello`)
}
// heroPower.hitesh();
myHeros.hitesh()
myHeros.heyHitsh()
// heroPower.heyHitsh();

// inheritance 

const User ={
    name : "Chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo :true
}

const TechingSupport = {
    isFiniteavailable : false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : false,
    __proto__: TechingSupport
}

Teacher.__proto__ = User;

// modern syntax 
Object.setPrototypeOf(TechingSupport, Teacher)
// console.log(Teacher)

let anotherUsername = "chaiaurcode ......."

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True lenght is : ${this.trim().length}`)
}
anotherUsername.truelength();
'rahul'.truelength();
'iceTea'.truelength();



