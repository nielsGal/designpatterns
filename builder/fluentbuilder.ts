import { Person } from "./person";

class FluentPersonBuilder {
    private person : Person;
    constructor(person : Person){
        this.person = person
    }
    build() : Person {
        return this.person;
    }
    age(age: number): FluentPersonBuilder{
        this.person.age = age;
        return this;
    }
    annualSalary(annualSalary: number): FluentPersonBuilder{
        this.person.annualSalary = annualSalary;
        return this;
    }
    firstName(firstName : string) : FluentPersonBuilder{
        this.person.firstName = firstName;
        return this;
    }
    lastName(lastName : string) : FluentPersonBuilder{
        this.person.lastName = lastName;
        return this;
    }
    works(works: string) : FluentPersonBuilder {
        this.person.workplace = works;
        return this;
    }
    role(role: string) : FluentPersonBuilder{
        this.person.role = role;
        return this;
    }
}

let builder : FluentPersonBuilder = new FluentPersonBuilder(new Person());
let john : Person = builder.age(33).firstName("john").lastName("doe").works("undisclosed company").role("developer").build()
console.log(john.describe());