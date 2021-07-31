class Memento{
    readonly balance: number;
    constructor(balance: number){
        this.balance = balance;
    }
}
class Stack<T>{
    private items: T[]
    private index : number
    constructor(){
        this.items = [];
        this.index = 0;
    }
    push(item : T): number{
        this.items[this.index]= item;
        this.index = this.index + 1;
        return this.index;
    }
    pop(): T | undefined {
        this.index = this.index - 1;
        return this.items[this.index];
    }
    peek(): T | undefined {
        return this.items[this.index-1]
    }
    length(): number{
        return this.index;
    }
}


class UndoableBankAccount{
    private balance : number;
    history : Stack<Memento>;
    constructor(balance: number){
        this.balance = balance;
        this.history = new Stack<Memento>();
    }
    deposit(amount : number) : Memento {
        let newTotal = this.balance + amount 
        let mem = new Memento(newTotal); 
        this.history.push(mem);
        this.balance = newTotal;
        return mem;
    }
    restore(m : Memento): void {
        this.history.push(m);
        this.balance = m.balance;
    }
    undo(): Memento {
        let curr = new Memento(this.balance);
        let previous = this.history.pop();
        this.balance = previous.balance;
        return curr
    }
    save(): Memento {
        return new Memento(this.balance);
    }
    describe():string{
        return `this is a bank account with a balanced of ${this.balance}`;
    }
}

let newAccount = new UndoableBankAccount(50);
console.log(newAccount.describe())
newAccount.deposit(50);
console.log(newAccount.describe())
newAccount.deposit(50);
console.log(newAccount.describe())
let save = newAccount.save();
newAccount.deposit(500);
console.log(newAccount.describe())
newAccount.undo();
console.log(newAccount.describe())
newAccount.undo();
console.log(newAccount.describe())
newAccount.undo();
console.log(newAccount.describe())
newAccount.restore(save);
console.log(newAccount.describe())
