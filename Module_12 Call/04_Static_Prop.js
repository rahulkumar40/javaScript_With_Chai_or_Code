class User{
    constructor(username){
        this.username = username;
    }

    LogMe(){
        console.log(`User name is ${this.username}`)
    }

    static creatId(){
        return `123`;
    }
}

const u1 = new User("rahul");
console.log(u1)
// u1.creatId()
// console.log(u1.creatId()) // give output without static 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

console.log(iphone)
console.log(iphone.LogMe)