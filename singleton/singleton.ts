class Settings {
    private static settings : Settings = new Settings();
    private volume : number =  0;
    private readonly MAX_VOLUME = 100;
    private readonly MIN_VOLUME = 0;
    constructor(){
    }
    static getInstance(){
        return  this.settings;
    }
    increaseVolume(increase : number): void{
        if (this.volume + increase < this.MAX_VOLUME){
            this.volume = this.volume + increase;
        }
    }
    decreaseVolume(descrease : number): void{
        if (this.volume - descrease > this.MIN_VOLUME){
            this.volume = this.volume - descrease;
        }
    }
    getVolume(): number {
        return this.volume;
    }
}

let settings1 =  Settings.getInstance();
let settings2 = Settings.getInstance();

settings1.increaseVolume(10);
console.log(settings1.getVolume(),settings2.getVolume());