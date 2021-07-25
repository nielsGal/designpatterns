class Memento{
    readonly balance: number;
    constructor(balance: number){
        this.balance = balance;
    }
}

class BankAccount{
    private balance : number;
    constructor(balance : number){
        this.balance = balance;
    }
    deposit(amount: number): Memento{
        this.balance = this.balance + amount;
        return new Memento(this.balance);
    }
    restore(m : Memento): void{
        this.balance = m.balance;
    }
    describe():string{
        return `this is a bank account with a balanced of ${this.balance}`;
    }
}
let bankaccount = new BankAccount(1000);
console.log(bankaccount.describe());
let backup = bankaccount.deposit(50);
bankaccount.restore(backup);
console.log(bankaccount.describe());
