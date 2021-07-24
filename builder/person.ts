export class Person {
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