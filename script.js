function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.isOn = false;
    this.volume = {
        max: 10,
        min: 0,
        current: 5
    }
}

Phone.prototype.clickPowerBtn = function(){
    var msg = this.isOn ? 'Turning off...':'Turning on...';
    console.log(msg);
    var timeout = new Date().getTime() + 3000;
    while (true) {
        var currTime = new Date().getTime();
        if (currTime > timeout) {
            break
        }
    }
    this.isOn = !this.isOn;
    msg = this.isOn ? 'Welcome! \n Device is now on!':'Bye bye!';
    console.log(msg);
};

Phone.prototype.printInfo = function(){
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
}

Phone.prototype.volumeUp = function(){
    if(this.volume.current < this.volume.max) {
        this.volume.current ++;
    }
    this.showVolume();
}

Phone.prototype.volumeDown = function(){
    if(this.volume.current > this.volume.min) {
        this.volume.current --;
    }
    this.showVolume();
}
Phone.prototype.mute = function() {
    this.volume.current = 0;
    this.showVolume();
}
Phone.prototype.showVolume = function(){
    console.log('Volume:' + this.volume.current + '/' + this.volume.max);
}
samsungGalaxyS6 = new Phone('Samsung', 2300, 'black');
iPhone6s = new Phone('Apple', 1600, 'gold');
onePlusOne = new Phone('OnePlus', 1300, 'white');

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.clickPowerBtn();
onePlusOne.mute();
onePlusOne.volumeUp();
onePlusOne.volumeUp();
onePlusOne.volumeUp();
onePlusOne.clickPowerBtn();
