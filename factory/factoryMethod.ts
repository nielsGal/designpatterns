class NaturalNumber{
    private number:number;
    constructor(number:number){
        this.number = number;
    }
    public next() : NaturalNumber {
        return new NaturalNumber(this.number + 1);
    }
}

let start = new NaturalNumber(0);
for(let i = 0;i<10;i++){
    console.log(start)
    start = start.next();
}