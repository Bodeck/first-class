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

Phone.prototype = {
    printInfo: function(){
        console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
    },
    volumeUp: function(){
        if(this.volume.current < this.volume.max) {
            this.volume.current ++;
        }
        this.showVolume();
    },
    volumeDown: function(){
        if(this.volume.current > this.volume.min) {
            this.volume.current --;
        }
        this.showVolume();
    },
    mute: function() {
        this.volume.current = 0;
        this.showVolume();
    },
    showVolume: function(){
        console.log('Volume:' + this.volume.current + '/' + this.volume.max);
    },

    clickPowerBtn: function() {
        var self = this;
        var msg = self.isOn ? 'Turning off...':'Turning on...';
        console.log(msg);
        myPromise = new Promise(function(resolve,reject) {
            setTimeout(function() {
                self.isOn = !self.isOn;
                return resolve(self.isOn)
            }, 1000);
        });
        myPromise.then(function(state) {
            var msg = state ? 'Welcome!' : 'Bye bye!';
            console.log(msg);
        })
    }

}

samsungGalaxyS6 = new Phone('Samsung', 2300, 'black');
iPhone6s = new Phone('Apple', 1600, 'gold');
onePlusOne = new Phone('OnePlus', 1300, 'white');

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.clickPowerBtn();
