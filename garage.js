import { getRandomNumber } from "./random.js";

//Helpers
const inputPrompt = 'Enter car data separated by (VIN, name, model, color, year)","'
let existingCarVIN = "";
//Data
const garage = [];
let inputData = prompt(inputPrompt);
while (inputData) {
    addCar(inputData);
    const existedCarText = existingCarVIN ? "Car with VIN" + existingCarVIN + " already exist! " : ""
    const confirmation = confirm(existedCarText + 'Do you want to add another car?');
    inputData = confirmation ? prompt(inputPrompt) : ""
}

printGarage(garage);

function addCar(argsString) {
    const argsArray = argsString.split(',');
    const index = findCar(garage, argsArray[0])
    if (index === -1) {
        const car = new Car(...argsArray) // rest operator (opening array to a queue of variables) -> (argsArray[0], argsArray[1], argsArray[2], argsArray[3])
        car.addToHTML()
        garage.push(car)
    } else {
        existingCarVIN = argsArray[0];
    }
}

function findCar(garage, vin) {
    for (let i = 0; i < garage.length; i++) {
        if (garage[i].vin === vin) {
            return i;
        }
    }
    return -1;
}

function printGarage(garage) {
    for (let i = 0; i < garage.length; i++) {
        console.log(`${garage[i].toString()}, Sum: ${garage[i].sumPrice()} `); //1l * 2 + volume
    }
}
function Car(vin, name, model, color, year) {
    this.vin = vin;
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.engine = getRandomNumber(1, 6); //объем двигателя -> 1-6
    this.volume = getRandomNumber(60, 500); //объем багажника -> 60-500
    this.toString = function () {
        return `VIN: ${this.vin}, Name: ${this.name}, Model: ${this.model},
        Year of building: ${this.year}, Color: ${this.color}, Engine: ${this.engine}, Volume: ${this.volume}`;
    }
    this.sumPrice = function () {
        return this.engine * 2 + this.volume;
    }
    this.properties = function () {
        return [
            { title: "Vin", value: this.vin },
            { title: "Name", value: this.name },
            { title: "Model", value: this.model },
            { title: "Color", value: this.color },
            { title: "Year", value: this.year },
            { title: "Engine", value: this.engine },
            { title: "Volume", value: this.volume },
        ]
    }
    this.addToHTML = function () {
        const root = document.getElementById("root");
        const div = document.createElement("div");
        const carTitle = document.createElement("h3");
        carTitle.innerHTML = `Car ${this.name}`
        div.style.margin = "8px 0"
        div.style.borderBottom = "1px solid #eee"
        const properties = this.properties()
        for (let i = 0; i < properties.length; i++) {
            const title = this.createTitle(properties[i])
            div.appendChild(title);
        }
        root.appendChild(carTitle)
        root.appendChild(div)
    }
    this.createTitle = function (property) {
       const title = document.createElement("span");
       title.style.padding = "0 8px";
       title.innerHTML = `${property.title}: ${property.value}`;
       return title;
    }
}


