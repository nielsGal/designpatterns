class Person {
  firstName: string;
  lastName: string;
  age: number;
  workplace: string;
  role: string;
  annualSalary: number;

  describe() : string {
      return `this is ${this.firstName} ${this,this.lastName} aged ${this.age}. Who works at ${this.workplace} as a ${this.role} `
  }
}

class PersonBuilder {
  person: Person;
  constructor(person: Person) {
    this.person = person;
  }
  works(): PersonWorkBuilder {
    return new PersonWorkBuilder(this.person);
  }
  info(): PersonInfoBuilder {
    return new PersonInfoBuilder(this.person);
  }
  build() : Person{
      return this.person;
  }
}
class PersonInfoBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }
  firstName(firstName: string): PersonInfoBuilder {
    this.person.firstName = firstName;
    return this;
  }
  lastName(lastName: string): PersonInfoBuilder {
    this.person.lastName = lastName;
    return this;
  }
  age(age: number): PersonInfoBuilder {
    this.person.age = age;
    return this;
  }
}
class PersonWorkBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }
  workplace(workplace: string) : PersonWorkBuilder {
    this.person.workplace = workplace;
    return this;
  }
  role(role: string) : PersonWorkBuilder {
    this.person.role = role;
    return this;
  }
  annualSalary(annualSalary: number) : PersonWorkBuilder{
      this.person.annualSalary = annualSalary;
      return this;
  }
}


let builder : PersonBuilder = new PersonBuilder(new Person());
let john : Person = builder
        .works()
            .role("developer")
            .workplace("undisclosed company")
        .info()
            .age(31)
            .firstName("john")
            .lastName("doe").build();
console.log(john.describe())