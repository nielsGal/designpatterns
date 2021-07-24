class User{
    userName : string;
    salt : string;
    hashedPassword: string;
    credit : number;
    isEmployee : boolean;

    constructor(credit : number, isEmployee){
        this.credit = credit;
        this.isEmployee = isEmployee;
    }
    describe(): string{
        if (this.isEmployee){
            return "this is an employee"
        }else{
            return `this is a regular user with ${this.credit} credits`
        }
    }
}

class Administrator extends User{

}
class Customer extends User{

}
class UserFactory{
    public static create(type: string): User{
        switch (type){
            case "administrator":
                return new Administrator(0,true);
            case "customer":
                return new Customer(0,false);
            case "user":
                return new User(0,false);
            default:
                throw `Can't create a user without a valid type: \"${type}\" is not a valid user type`
        }
    }
}
let admin  = UserFactory.create('administrator')
console.log(admin.describe())
let customer  = UserFactory.create("customer")
console.log(customer.describe())
let user = UserFactory.create("user")
console.log(user.describe());
try{
    let error = UserFactory.create("invalid input")
}catch (e){
    console.log(e)
}