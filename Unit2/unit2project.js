document.getElementById('startButton').addEventListener('click', function() {
    mycar.startengine();
});

document.getElementById('stopButton').addEventListener('click', function() {
    mycar.stopengine();
});

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isrunning = false;
    }

    startengine() {
        this.isrunning = true;
        console.log(this.year + ' ' + this.make + ' ' + this.model + ' engine started.');
    }

    stopengine() {
        this.isrunning = false;
        console.log(this.year + ' ' + this.make + ' ' + this.model + ' engine stopped.');
    }
}

const mycar = new car('Chevrolet', 'Corvette', 2020);
mycar.startengine();