class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`USERNAME IS ${this.username.toUpperCase()}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCource(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const chai = new Teacher("Chai", "chai@gamilc.com", "123");
chai.addCource()

const masalachai = new User("MasalaChai")
// masalachai.addCource();
masalachai.logMe();
chai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
