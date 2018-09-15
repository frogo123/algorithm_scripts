function Stopwatch() {
    let = startTime = 0;
    let = controlSwitch = true;
    let = duration = 0;
    let = stopTime = 0;

    Object.defineProperty(this, 'controlSwitch', {
        get: () => controlSwitch
    })


    Object.defineProperty(this, 'stopTime', {
        get: () => stopTime
    })

    Object.defineProperty(this, 'duration', {
        get: () => duration,
        set: (value) => duration = value
    })
}

Stopwatch.prototype.start = () =>{ 
    if (this.controlSwitch){
        this.startTime =  new Date();
        this.controlSwitch = false;
        return this.startTime;
    }
    else{
        throw "The start button has been pressed"
    }
}
Stopwatch.prototype.stop = () => {
    if (!this.controlSwitch){
    this.stopTime = new Date();    
    this.duration += (this.stopTime.getTime() - this.startTime.getTime())/ 1000 ;
    this.controlSwitch = true;
    }
    else{
        throw "The stop button has been pressed"
    }
}
Stopwatch.prototype.reset = () => {
    this.duration = 0;
    this.startTime = 0;
    this.controlSwitch = true;
}

let time = new Stopwatch();




