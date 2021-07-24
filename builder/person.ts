class Person {
    private firstName : string;
    private lastName : string;
    private age : number;
    private workplace : string;
    private role : string;
    private annualSalary : number;
}

class PersonBuilder {
    private person : Person
    constructor(person: Person){
        this.person = person;
    }
    works() : PersonWorkBuilder{
        return new PersonWorkBuilder(this.person);
    }
    info() : PersonInfoBuilder{
        return new PersonInfoBuilder(this.person);
    }
}
class PersonInfoBuilder extends PersonBuilder{
    constructor(person: Person){
        super(person);
    }
}
class PersonWorkBuilder extends PersonBuilder{
    constructor(person: Person){
        super(person);
    }

}