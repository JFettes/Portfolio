class Car {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
}

let carLinkedList = [];

const addCar = () => {
        const yearInput = document.getElementById('yearInput').value;
        const makeInput = document.getElementById('makeInput').value;
        const modelInput = document.getElementById('modelInput').value;
        
        const newCar = new Car(yearInput, makeInput, modelInput);
        carLinkedList.push(newCar);
        displayCars();
};

const displayCars = () => {
    const carListDiv = document.getElementById('carList');
    carListDiv.innerHTML = '';
    carLinkedList.forEach(car => {const carInfo = document.createElement('p');
        carInfo.textContent = `${car.year} ${car.make} ${car.model}`;
        carListDiv.appendChild(carInfo);
    });
};