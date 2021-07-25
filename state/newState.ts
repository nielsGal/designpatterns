

enum PhoneState{
    OffHook = "OffHook",
    Connecting = "Connecting",
    Connected = "Connected",
    OnHold = "OnHold",
}
enum PhoneTriggers{
    CallDialed="CallDialed",
    HungUp="HungUp",
    CallConnected="CallConnected",
    PlacedOnHold="PlacedOnHold",
    TakenOffHold="TakenOffHold",
    LeftMessage="LeftMessage",
}
let s = {
    [PhoneState.OffHook] : [{CallDialed:PhoneState.Connecting}],
    [PhoneState.Connected]: [{LeftMessage:PhoneState.OffHook},{HungUp:PhoneState.OffHook},{PlacedOnHold:PhoneState.OnHold}],
    [PhoneState.Connecting] : [{HungUp:PhoneState.OffHook},{CallConnected:PhoneState.Connected}],
    [PhoneState.OnHold]: [{TakenOffHold:PhoneState.Connected},{HungUp:PhoneState.OffHook}]  
}


let state = PhoneState.OffHook;
console.log(s[state][0][PhoneTriggers.CallDialed]);