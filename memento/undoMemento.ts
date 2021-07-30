class stack<T>{
    private items: T[]
    private index : number
    constructor(){
        this.items = []
        this.index = 0
    }
    push(item : T): number{
        this.items[this.index]= item;
        this.index++;
        return this.index;
    }
    pop(): T | undefined {
        if (this.index == 0){
            return undefined
        }
        let item = this.items[this.index]
        this.index--;
        return item;
    }
    peek(): T | undefined{
        if(this.index == 0){
            return undefined
        }
        return this.items[this.index]
    }
    length():number{
        return this.index;
    }
}


class UndoableBankAccount{
    private balance : number;
    private currentMemento : number;

    deposit(amount : number) : Memento {

        return new Memento(50);
    }
    restore(m : Memento): void {

    }
    undo(): Memento {
        return new Memento(50);
    }
    save(): Memento {
        return new Memento(50);
    }
}