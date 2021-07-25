class State{

    on(lswitch: LightSwitch): void{
        console.log("Light is already on");
    }

    off(lswitch: LightSwitch): void{
        console.log("Light is already off");
    }
}
class OnState extends State{
    constructor(){
        super();
        console.log("light turned on");
    }
    off(lswitch : LightSwitch){
        lswitch.state = new OffState();
    }
}
class OffState extends State{
    constructor(){
        super();
        console.log("light turned off");
    }
    on(lswitch : LightSwitch){
        lswitch.state = new OnState();
    }
}
class LightSwitch{

    state : State;
    constructor(){
        this.state = new OffState();
    }
    on(): void{
        this.state.off(this);
    }
    off(): void{
        this.state.on(this)
    }
    
}

let lswitch : LightSwitch = new LightSwitch();
lswitch.off();
lswitch.on();
lswitch.on();
lswitch.off();
lswitch.off();